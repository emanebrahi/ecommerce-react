import React from "react";
import { useSelector } from "react-redux";
import CouponSection from "../Cart/CouponSection";
import '../../style/cart.css'

function ProductsInCart() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <h3>Shopping Cart</h3>
      <table className="table table-borderless table-cart">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "30px" }}
                />
              <span className="ms-4">{item.title.slice(0,20)}</span>

              </td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <CouponSection totalPrice={totalPrice} layout="row" order="reverse" showCartTotal={true} />
      </div>
  );
}

export default ProductsInCart;
