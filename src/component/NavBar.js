import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Dropdown } from "react-bootstrap";
import "../style/navbar.css";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const favoritesCount = useSelector((state) => state.cart.favorites.length);
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true); 


  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    alert("You have logged out.");
  };

  const handleDropdownToggle = (isOpen) => {
    setDropdownOpen(isOpen);
  };

  const handleNavbarToggle = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed); 
  };


  return (
    <div className="container">
      <nav
        className={`navbar navbar-expand-lg  ${
          dropdownOpen ? "navbar-expanded" : "navbar-collapsed"
        }`}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Exclusive
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={!isNavbarCollapsed}
            aria-label="Toggle navigation"
            onClick={handleNavbarToggle} 
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              {!isLoggedIn && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signup">
                    SignUp
                  </NavLink>
                </li>
              )}
            </ul>
            <form className="d-flex navbar-form" role="search">
              <div className="input-search-container">
                <div className="search-container">
                  <input
                    className="form-control me-2 input-search"
                    type="search"
                    placeholder="What are you looking for ?"
                    aria-label="Search"
                  />
                  <label className="search-icon">
                    <i className="fas fa-search"></i>
                  </label>
                </div>
              </div>
              <NavLink
                to="/favourite"
                className="btn ms-1 me-1 position-relative"
              >
                <i className="far fa-heart"></i>
                {favoritesCount > 0 && (
                  <span className="badge-favourite bg-danger position-absolute">
                    {favoritesCount}
                  </span>
                )}
              </NavLink>
              <NavLink to="/cart" className="btn ms-2 me-2 position-relative">
                <i className="fas fa-shopping-cart"></i>
                {cartItems.length > 0 && (
                  <span className="badge-cart position-absolute rounded-pill bg-danger">
                    {cartItems.reduce(
                      (total, item) => total + item.quantity,
                      0
                    )}
                  </span>
                )}
              </NavLink>

              <Dropdown drop="down" onToggle={handleDropdownToggle}>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  <i className="fa-solid fa-user"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-user">
                  <Dropdown.Item>
                    <NavLink to="/account" className='text-decoration-none  text-light'>
                      <i className="fa-solid fa-user"></i> Manage My Account
                    </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item href="/orders">
                    <NavLink to="/orders" className='text-decoration-none  text-light'>
                      <i className="fa-regular fa-square-caret-down"></i> My
                      Orders
                    </NavLink>
                  </Dropdown.Item>

                  <Dropdown.Item>
                    <NavLink to="/canceledOrders" className='text-decoration-none  text-light'>
                      <i className="fa-solid fa-xmark"></i> My Cancellations
                    </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleLogOut} className='text-decoration-none  text-light'>
                    <navLink onClick={handleLogOut} >
                      <i className="fa-solid fa-arrow-left"></i> Log Out
                    </navLink>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
