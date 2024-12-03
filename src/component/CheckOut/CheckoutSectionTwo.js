import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { placeOrder } from "../../store/CartSlice"; 
import CouponSection from "../Cart/CouponSection";
import '../../style/checkout.css';
import bcach from '../../imges/radio1.png';
import visa from '../../imges/radio2.png';
import mastercard from '../../imges/radio3.png';
import nagad from '../../imges/radio4.png';
import { Navigate } from "react-router-dom";

function CheckoutSection() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [selectedPayment, setSelectedPayment] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [discountedPrice, setDiscountedPrice] = useState(
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  );

  const handleApplyCoupon = (discount) => {
    const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const newPrice = total - total * discount;
    setDiscountedPrice(newPrice);
    setCouponApplied(true);
  };

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    if (!selectedPayment) {
      alert("Please select a payment method.");
      return;
    }
    dispatch(placeOrder({ cartItems, totalPrice: discountedPrice, paymentMethod: selectedPayment }));
    alert("Order placed successfully!");
    Navigate("/orders");
  };

  const totalPriceStyling = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    marginBottom: "0px",
  };

  return (
    <div className="container">
      <table className="table table-borderless mb-0 table-checkout">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Total Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt={item.title} style={{ width: "50px" }} />
                <span className="ms-4">{item.title.slice(0, 20)}</span>
              </td>
              <td className="position-relative">
                <p style={totalPriceStyling}>
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex align-items-center mt-3">
        <input
          className="form-check-input"
          type="radio"
          name="paymentMethod"
          value="Bank"
          onChange={(e) => setSelectedPayment(e.target.value)}
        />
        <p className="ms-1 mb-0">Bank</p>
        <div className="ms-auto">
          <img src={bcach} width="50" height="40" alt="Bank" />
          <img src={visa} width="20" height="15" alt="Visa" />
          <img src={mastercard} width="20" height="20" style={{ margin: "0px 0px 0px 5px" }} alt="MasterCard" />
          <img src={nagad} width="50" height="40" alt="Nagad" />
        </div>
      </div>

      <div className="d-flex mt-2">
        <input
          className="form-check-input"
          type="radio"
          name="paymentMethod"
          value="Cash on Delivery"
          onChange={(e) => setSelectedPayment(e.target.value)}
        />
        <p className="ms-1 mb-0">Cash on Delivery</p>
      </div>

      <div className="mt-3 mb-0">
        <CouponSection
          totalPrice={discountedPrice}
          layout="column"
          showCartTotal={false}
          onApplyCoupon={(discount) => handleApplyCoupon(discount)} 
        />
        <button className="btn btn-danger ms-2" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
}

export default CheckoutSection;
