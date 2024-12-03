import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  addToFavorites,
  removeFromCart,
} from "../../store/CartSlice";
import axios from "axios";
import Titlehome from "../Titlehome";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        return axios.get("https://fakestoreapi.com/products");
      })
      .then((response) => {
        const sameCategoryProducts = response.data.filter(
          (item) =>
            item.category === response.data.category && item.id !== Number(id)
        );
        setRelatedProducts(sameCategoryProducts);
      })
      .catch((error) => console.log(error));
  }, [id]);


  const handleAddToFavourite = () => {
    dispatch(addToFavorites(product));
  };

  const handleIncrement = () => {
    dispatch(increaseQuantity(product.id));
  };

  const handleDecrement = () => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem && existingItem.quantity > 1) {
      dispatch(decreaseQuantity(product.id));
    } else {
      dispatch(removeFromCart(product.id));
    }
  };

  const handleBuyNow = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    navigate("/checkout"); 
  };

  const renderColors = () => {
    const colors = ["Red", "Blue", "Green", "Black"];
    return (
      <div className="mb-3 d-flex">
        <h5>Colors:</h5>
        {colors.map((color) => (
          <div className="form-check ms-2" key={color}>
            <input
              className="form-check-input"
              type="radio"
              name="color"
              id={`color-${color}`}
              onClick={() => setSelectedColor(color)}
              style={{
                backgroundColor: color.toLowerCase(),
                border: selectedColor === color ? "2px solid #000" : "none",
              }}
            />
          </div>
        ))}
      </div>
    );
  };

  const renderSizes = () => {
    const sizes = ["S", "M", "L", "XL"];
    return (
      <div className="mb-3 d-flex">
        <h5 className="me-3">Sizes:</h5>
        {sizes.map((size) => (
          <button
            key={size}
            className="btn btn-outline-secondary me-2"
            style={{
              border:
                selectedSize === size ? "2px solid #000" : "1px solid #ccc",
            }}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    );
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="row">
            <div className="col-lg-3">
              <div className="mb-3">
                <img
                  src={product.image}
                  alt="Thumbnail"
                  className="img-thumbnail"
                  style={{ height: "100px", objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-9">
              <img
                src={product.image}
                alt="Main"
                className="img-fluid rounded"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="col-lg-6">
          <h1 className="mb-3">{product.title}</h1>
          <p className="text-muted">{product.description}</p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <h4 className="text-danger mb-3">${product.price}</h4>

          {renderColors()}
          {renderSizes()}
          <div className="d-flex">
            <div className="mb-3">
              <button
                className="btn btn-light me-2"
                onClick={handleDecrement}
              >
                -
              </button>
              <span className="me-2">
                {
                  cart.find((item) => item.id === product.id)?.quantity || 1
                }
              </span>
              <button className="btn btn-light" onClick={handleIncrement}>
                +
              </button>
            </div>

            <div>
              <button className="btn btn-danger me-2" onClick={handleBuyNow}>
                Buy Now
              </button>
              <button
                className="btn border border-1"
                onClick={handleAddToFavourite}
              >
                <i className="fa-regular fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-5">
        <Titlehome title="Related Items" />
        <div className="row">
          {relatedProducts.map((item) => (
            <div className="col-lg-4 col-md-6 col-12 col-sm-12" key={item.id}>
              <div
                className="card me-3 mb-3"
                style={{ height: "300px", cursor: "pointer" }}
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="card-img-top"
                  style={{
                    width: "100%",
                    overflow: "hidden",
                    height: "300px",
                    padding: "1rem",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "1rem" }}>
                    {item.title}
                  </h5>
                  <p className="text-success">${item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
