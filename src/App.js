
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import HomePage from "./page/Home/HomePage";
import Contact from "./page/Contact";
import About from "./page/About";
import Signup from "./page/Signup";
import Login from "./page/Login";
import ProductsInCart from "./component/Cart/ProductsInCart";
import WishList from "./component/WishList/WishList";
import Checkout from "./component/CheckOut/Checkout";
import CategoryProducts from "./component/ProductsCategory/CategoryProducts";
import ProductDetails from "./component/ProductsCategory/ProductDetails";
import NotFound from "./page/NotFound";
import ForgetPassword from "./component/ForgetPassword";
import Account from './component/Account/Account'
import FavouriteProducts from './component/Favourite/FavouriteProducts'
import Orders from "./component/Orders/Orders";
import CanceledOrders from "./component/Orders/CanceledOrders";

function App() {
  return (
    <Router>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<ProductsInCart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/favourite" element={<FavouriteProducts />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/canceledOrders" element={<CanceledOrders/>} />

        <Route path="/checkout" element={<Checkout />} />

        {/* Dynamic Category Route */}
        <Route path="/category/:categoryname" element={<CategoryProducts />} />
        <Route path="/account" element={<Account/>}/>

        {/* Product Details */}
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/forget-password" element={<ForgetPassword />} />

      
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
