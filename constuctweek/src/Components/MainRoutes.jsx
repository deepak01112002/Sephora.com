import { Dashboard } from "../Gpages/Dashboard";

import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "../Gurmeet/Admin";
import Product from "./Product";
import SinglePage from "./SinglePage";
import Home from "../Pages/Home";
import Cart from "../Sanjeet/Cart";
import Payment from "../Sanjeet/Payment";

import { EditProduct } from "../Gpages/EditProduct";

import Otp from "../Sanjeet/Otp"
import Login from "../Nitin/Login";
import PrivateRoute from "./PrivateRoute";


function MainRoutes() {
  return (
    <div>

      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/login"} element={<Login/>}></Route>
        <Route path="/Makeup" element={<Product />}></Route>
        <Route path="/admin" element={
        <PrivateRoute>
        <Dashboard />
        </PrivateRoute>
        }></Route>
        <Route path="/cart" element={
        <PrivateRoute>
        <Cart />
        </PrivateRoute>
        }></Route>
        <Route path="/Makeup/:id" element={<SinglePage />}></Route>
        <Route path="/payment" element={
        <PrivateRoute>
        <Payment />
        </PrivateRoute>
        }></Route>
        <Route path="/edit/:id" element={
        <PrivateRoute>
        <EditProduct />
        </PrivateRoute>
        }></Route>
        <Route path="/otp" element={
        <PrivateRoute>
        <Otp/>
        </PrivateRoute>
        }></Route>
      </Routes>

    </div>
  );
}

export default MainRoutes;
