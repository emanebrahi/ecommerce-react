import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/CartSlice";

function CartActions({ item }) {
  const dispatch = useDispatch();

  return (
    <button
      className="btn btn-dark w-100"
      onClick={() => dispatch(addToCart(item))}
    >
      <i className="fas fa-shopping-cart"></i> Add to Cart
    </button>
  );
}

export default CartActions;
