import React from "react";

function Header() {
  return (
    <div className="bg-dark text-light">
      <div className="container d-flex justify-content-center align-items-center p-2">
      <div>
        <p className="mb-0 text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <a className="shop-now-button text-light ms-2">ShopNow</a>
        </p>
      </div>

      <div className="dropdown ms-5">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Eglish
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Arabic
            </a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default Header;
