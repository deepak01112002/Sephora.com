
import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "../Gurmeet/Admin";
import Product from "./Product";
import SinglePage from "./SinglePage";
import Home from "../Pages/Home";
import Cart from "../Sanjeet/Cart";
import Payment from "../Sanjeet/Payment";


function MainRoutes() {
  return (
    <div>

      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path="/Makeup" element={<Product />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/Makeup/:id" element={<SinglePage />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
      </Routes>

    </div>
  );
}

export default MainRoutes;
