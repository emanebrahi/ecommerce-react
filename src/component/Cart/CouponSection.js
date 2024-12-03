import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { placeOrder } from "../../store/CartSlice";
import { Link } from "react-router-dom";

function CouponSection({
  totalPrice,
  layout = "row",
  order = "default",
  showCartTotal = true,
}) {
  const dispatch = useDispatch();
  const [coupon, setCoupon] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState(totalPrice);
  const validCoupons = { SAVE10: 0.1, SAVE20: 0.2 };

  const handleApplyCoupon = () => {
    if (validCoupons[coupon]) {
      const discount = validCoupons[coupon];
      const newPrice = totalPrice - totalPrice * discount;
      setDiscountedPrice(newPrice);
      alert(`Coupon applied! You saved ${(totalPrice * discount).toFixed(2)}.`);
    } else {
      alert("Invalid coupon code.");
      setDiscountedPrice(totalPrice);
    }
  };

  return (
    <div className={`container ${layout === "row" ? "d-flex" : ""}`}>
      <div
        className={`${
          layout === "row" ? "w-50 border border-1 border-dark p-3" : ""
        } ${order === "reverse" ? "order-2" : "order-1"}`}
      >
        {showCartTotal && <h6 className="mb-3">Cart Total</h6>}

        <div className="d-flex justify-content-between">
          <p className="mb-0">Subtotal</p>
          <p className="mb-0">${discountedPrice.toFixed(2)}</p>
        </div>
        <hr />

        <div className="d-flex justify-content-between">
          <p className="mb-0">Shipping</p>
          <p className="mb-0">Free</p>
        </div>
        <hr />

        <div className="d-flex justify-content-between">
          <p className="mb-0">Total</p>
          <p className="mb-0">${discountedPrice.toFixed(2)}</p>
        </div>

        {showCartTotal && (
          <div className="text-center">
            <Link className="btn btn-danger w-50 mt-3" to="/checkout">
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>

      <div
        className={`${layout === "row" ? "w-50 me-3" : "mb-1"}  pt-2 pb-2 ${
          order === "reverse" ? "order-1" : "order-2"
        }`}
      >
        {showCartTotal && <h6 className="mb-3">Apply Coupon</h6>}
        <div className="d-flex">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your coupon"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
          <Link
            className="btn btn-danger ms-3 w-100"
            onClick={handleApplyCoupon}
          >
            Apply Coupon
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CouponSection;
