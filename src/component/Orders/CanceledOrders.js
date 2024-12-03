// CancelPage.js
import React from "react";
import { useSelector } from "react-redux";

function CanceledOrders() {
  const canceledOrders = useSelector((state) => state.cart.canceledOrders);

  return (
    <div className="container">
      <h3>My Canceled Orders</h3>
      <div className="row">
        {canceledOrders.length > 0 ? (
          canceledOrders.map((order) => (
            <div
              key={order.id}
              className="border p-3 mb-3 col-lg-6 col-md-6 col-sm-12 col-12"
            >
              <h5>Order #{order.id}</h5>
              <p>Date: {order.date}</p>
              <ul>
                {order.items.map((item) => (
                  <div key={item.id}>
                    <img
                      src={item.image}
                      width="40px"
                      height="40px"
                      alt={item.title}
                    />
                    <li>
                      {item.title} - {item.quantity} x ${item.price}
                    </li>
                  </div>
                ))}
              </ul>
              <h6>Total: ${order.total.toFixed(2)}</h6>
              <p className="text-danger">This order has been canceled.</p>
            </div>
          ))
        ) : (
          <p>No canceled orders.</p>
        )}
      </div>
    </div>
  );
}

export default CanceledOrders;
