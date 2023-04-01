import React from "react";
import Sidebar from "./Sidebar";
import "../App.css";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../Gpages/Dashboard";
import { About } from "../Gpages/About";
import { Comment } from "../Gpages/Comment";
import { Analytics } from "../Gpages/Analytics";
import { Products } from "../Gpages/Products";
import { ProductList } from "../Gpages/ProductList";

const Admin = () => {
  return (
    <div>
      <div
        style={{
          background: "#000",
          marginBottom: "0",
          width: "100vw",
          height: "50px",
          // marginLeft: "auto",
          position: "absolute",
          zIndex: "-1",
          color: "white",
          display: "flex",
        }}
      >
        <h1 style={{ margin: "auto", color: "white" }}>Admin Dashboard</h1>
        <div style={{ padding: "5px 0 5px 0" }}>
          <button type="button" class="btn mx-4" style={{ color: "white" }}>
            Logout
            <i
              className="fa fa-sign-out me-1"
              style={{ marginLeft: "10px", fontSize: "18px" }}
            ></i>
          </button>
        </div>
      </div>

      <Sidebar>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Sidebar>
    </div>
  );
};

export default Admin;
