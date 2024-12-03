import React, { useState } from "react";
import "../../style/account.css"; 
import { NavLink } from "react-bootstrap";
function SectionOneAccount() {
  const [activeItem, setActiveItem] = useState(null); 

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div>
      <dl>
        <dt>Manage My Account</dt>
        <dd>
          <ul className="account-list">
            <li
              className={activeItem === "my-account" ? "active" : ""}
              onClick={() => handleItemClick("my-account")}
            >
              My account
            </li>
            <li
              className={activeItem === "my-address" ? "active" : ""}
              onClick={() => handleItemClick("my-address")}
            >
              My address book
            </li>
            <li
              className={activeItem === "my-payment" ? "active" : ""}
              onClick={() => handleItemClick("my-payment")}
            >
              My Payment Options
            </li>
          </ul>
        </dd>

        <dt>My Orders</dt>
        <dd>
          <ul className="account-list">
            <li
              className={activeItem === "My Returns" ? "active" : ""}
              onClick={() => handleItemClick("My Returns")}
            >
              My Returns
            </li>
            <li
              className={activeItem === "My Cancellations" ? "active" : ""}
              onClick={() => handleItemClick("My Cancellations")}
            >
              My Cancellations
            </li>
          </ul>
        </dd>

        <dt>
          <NavLink to='/wishlist'>
          My Wishlist</NavLink>
        </dt>
        
      </dl>
    </div>
  );
}

export default SectionOneAccount;
