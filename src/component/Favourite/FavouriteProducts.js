import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../../store/CartSlice";
import ProductsShape from "../Home/ProductsShape";

function FavoriteProducts() {
  const favorites = useSelector((state) => state.cart.favorites);
  const dispatch = useDispatch();

  const styleImage = {
    width: "85%",
    height: "200px",
    overflow: "hidden",
    padding: "1rem",
    borderRadius: "20px",
  };
  const removingStyle = {
    position: "absolute",
    top: "0px",
    right: "0px",
    border: "0",
  };

  return (
    <div className="container">
      <h5>Favorites ({favorites.length})</h5>
      <div className="row">
        {favorites.length > 0 ? (
          favorites.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="cart-item position-relative">
                <div className="text-center" style={{ backgroundColor: "#f5f5f5" }}>
                  <img src={item.image} style={styleImage} />
                </div>
                <h4>{item.title}</h4>
                <p>{item.price}$</p>
                <button
                  className="btn"
                  style={removingStyle}
                  onClick={() => dispatch(removeFromFavorites(item.id))}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Your favorites list is empty.</p>
        )}
      </div>
    </div>
  );
}

export default FavoriteProducts;
