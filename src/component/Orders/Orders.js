// Orders.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cancelOrder } from "../../store/CartSlice"; 

function Orders() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.cart.orders);

  const handleCancelOrder = (orderId) => {
    dispatch(cancelOrder(orderId));
  };

  return (
    <div className="container">
      <h3>My Orders</h3>
      <div className="row">
        {orders.length > 0 ? (
          orders.map((order) => (
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
              <button
                className="btn btn-danger"
                onClick={() => handleCancelOrder(order.id)}
              >
                Cancel Order
              </button>
            </div>
          ))
        ) : (
          <p>No orders yet.</p>
        )}
      </div>
    </div>
  );
}

export default Orders;
