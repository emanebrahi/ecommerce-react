import React, { useEffect, useState } from "react";
import "../../style/sliderhome.css";
import axios from "axios";

function ProductsShape({
  element,
  index,
  showHeartIcon = true,
  showEyeIcon = true,
}) {
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const favoriteSavedItems = localStorage.getItem("favorites");
    return favoriteSavedItems ? JSON.parse(favoriteSavedItems) : [];
  });
  const [wishlist, setWishlist] = useState(() => {
    const wishlistSavedItems = localStorage.getItem("wishlist");
    return wishlistSavedItems ? JSON.parse(wishlistSavedItems) : [];
  });
  const [clickedfavourite, setClickedfavourite] = useState({});
  const [clickedwishlist, setClickedwishlist] = useState({});

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToFavorites = (id) => {
    const productInFavorites = data.find((item) => item.id === id);

    if (productInFavorites) {
      const existingFavorite = favorites.find((item) => item.id === id);
      if (!existingFavorite) {
        setFavorites([...favorites, productInFavorites]);
      } else {
        setFavorites(favorites.filter((item) => item.id !== id)); // Remove from favorites
      }
    }
    setClickedfavourite((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const addToWishlist = (id) => {
    const productInWishlist = data.find((item) => item.id === id);

    if (productInWishlist) {
      const existingWishlist = wishlist.find((item) => item.id === id);
      if (!existingWishlist) {
        setWishlist([...wishlist, productInWishlist]);
      } else {
        setWishlist(wishlist.filter((item) => item.id !== id));
      }
    }
    setClickedwishlist((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const discounts = [
    { discount: 40 },
    { discount: 35 },
    { discount: 30 },
    { discount: 25 },
  ];

  const ratings = [
    { rate: 88, offsetRating: "78%" },
    { rate: 75, offsetRating: "55%" },
    { rate: 100, offsetRating: "100%" },
    { rate: 99, offsetRating: "85%" },
    { rate: 99, offsetRating: "99%" },
  ];

  const discountIndex = index % discounts.length;
  const ratingIndex = index % ratings.length;

  const discountPercentage = discounts[discountIndex]?.discount ?? 0;
  const discountedPrice = (
    element.price *
    (1 - discountPercentage / 100)
  ).toFixed(2);
  const productRating = ratings[ratingIndex] ?? { rate: 0, offsetRating: "0%" };

  const styleImage = {
    width: "85%",
    height: "200px",
    overflow: "hidden",
    padding: "0.5rem",
    borderRadius: "50px",
  };

  const styleImageContainer = {
    backgroundColor: "#f5f5f5",
    margin: "5px",
  };

  return (
    <div className="item-product">
      <div>
        <div style={styleImageContainer}>
          <img style={styleImage} src={element.image} alt={element.title} />
        </div>

        <div className="discount-off">
          <span>- {discountPercentage} %</span>
        </div>
        <div className="icons">
          {showHeartIcon && (
            <button
              className="border-0 bg-transparent"
              onClick={() => addToFavorites(element.id)}
            >
              <i
                className="fa-regular fa-heart mb-1"
                style={{
                  color: clickedfavourite[element.id] ? "red" : "black",
                }}
              ></i>
            </button>
          )}
          {showEyeIcon && (
            <button
              className="border-0 bg-transparent"
              onClick={() => addToWishlist(element.id)}
            >
              <i
                className="fa-regular fa-eye"
                style={{
                  color: clickedwishlist[element.id] ? "blue" : "black",
                }}
              ></i>
            </button>
          )}
        </div>
        <div>
          <p className="ps-3">{element.title}</p>
          <p className="ps-3 mb-0">
            <span className="text-danger me-2">{discountedPrice}$</span>
            <span className="text-secondary text-decoration-line-through">
              {element.price}$
            </span>
          </p>
          <div className="rate mt-0">
            <svg width="100" height="50" viewBox="0 0 200 20">
              <defs>
                <linearGradient id={`grad-${index}`}>
                  <stop offset={productRating.offsetRating} stopColor="gold" />
                  <stop offset="100%" stopColor="gray" />
                </linearGradient>
              </defs>
              <text x="10" y="15" fontSize="40" fill={`url(#grad-${index})`}>
                ★★★★★
              </text>
            </svg>
            <p>({productRating.rate})</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsShape;
