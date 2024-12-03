import React from "react";
import { NavLink } from "react-router-dom";
// import "../../../style/sidebarhome.css";

function Sidebarhome() {
  return (
    <div className="side-bar-home col-lg-3 col-md-12 col-sm-12">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div className="dropdown">

            <NavLink to="/category/women's clothing" className="text-dark text-decoration-none">Women's Wear</NavLink>

          </div>
        </li>
        <li className="list-group-item">
          <NavLink to="/category/men's clothing" className="text-dark text-decoration-none">Men's Wear</NavLink>

        </li>
        <li className="list-group-item">
          <NavLink to="/category/electronics" className="text-dark text-decoration-none">Electronics</NavLink>
        </li>
        <li className="list-group-item">
        <NavLink to="/category/jewelery" className="text-dark text-decoration-none">Jewelry</NavLink>
        </li>
        <li className="list-group-item">Medicine</li>
        <li className="list-group-item">Sports & Outdoor</li>
        <li className="list-group-item">Baby’s & Toys</li>
        <li className="list-group-item">Groceries & Pets</li>
        <li className="list-group-item">Health & Beauty</li>
      </ul>
    </div>
  );
}

export default Sidebarhome;
