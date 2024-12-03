
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { moveAllToCart, removeFromWishlist } from "../../store/CartSlice";
import ProductsShape from "../Home/ProductsShape";
import Titlehome from "../Titlehome";
import axios from "axios";

function WishList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setData(response.data.slice(16,20));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const wishlist = useSelector((state) => state.cart.wishlist);
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
    border:"0"
  };
  return (
    <div className="container">
     <div className="d-flex justify-content-between">
     <h5>Wishlist ({wishlist.length})</h5>
      <button
        className="btn btn-white border border-1 pe-5 ps-5 mb-2"
        onClick={() => dispatch(moveAllToCart())}
      >
        Move All to Cart
      </button>
     </div>
      <div className="row">
        {wishlist.length > 0 ? (
          wishlist.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="cart-item position-relative">
              <div className="text-center" style={{backgroundColor:"#f5f5f5"}}>
                <img src={item.image} style={styleImage} />
                <button className="btn btn-dark w-100"><i className="fas fa-shopping-cart"></i> add to cart</button>

                </div>
                <h4>{item.title}</h4>
                <p>{item.price}$</p>
                <button
                  className="btn"
                  style={removingStyle}
                  onClick={() => dispatch(removeFromWishlist(item.id))}
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Your wishlist is empty.</p>
        )}
        
        <div className="d-flex justify-content-between">
        <Titlehome title="just for you"/>
           <button className="btn btn-white border border-1 pe-5 ps-5 mb-2">See All</button>
         </div>
         <div className="row">
        {data.map((item)=>
           (
           <div className="col-lg-3 col-md-6 col-sm-12 col-12">
             <ProductsShape element={item} showHeartIcon = {false}/>

          </div>
          ))}
          </div>

      </div>
    </div>
  );
}

export default WishList;
