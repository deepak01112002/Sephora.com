import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productReducer/action";

const initialState = {
  title: "",
  image: "",
  brand: "",
  price: "",
  category: "",
};

export const Dashboard = () => {
  const [product, setProduct] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    //input values
    const { name, value } = e.target;
    setProduct((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(product);
    dispatch(addProduct(product));
    setProduct(initialState);
  };

  return (
    <div>
      <h1>Add Products</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          border: "1px solid black",
          width: "60%",
          margin: "auto 0",
          padding: "20px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="title"
              placeholder="Title"
              value={product.title}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image</label>
            <input
              style={{ width: "420px" }}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="image"
              placeholder="Link"
              value={product.image}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <div className="mb-3">
            <label className="form-label">Brand</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="brand"
              placeholder="Brand"
              value={product.brand}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="price"
              placeholder="$"
              value={product.price}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="mb-3" style={{ width: "205px" }}>
            <label className="form-label">Category</label>
            <select
              name="category"
              id=""
              className="form-control"
              onChange={(e) => handleChange(e)}
            >
              <option value="">Select Category</option>
              <option value="makeup">Makeup</option>
              <option value="gifts">Gifts</option>
              <option value="skincare">Skincare</option>
              <option value="fragrance">Fragrance</option>
              <option value="bathandbody">Bath & Body</option>
              <option value="hair">Hair</option>
              <option value="toolsandbrushes">Tools & Brushes</option>
              <option value="men">Men</option>
              <option value="cleanatsephora">Clean at Sephora</option>
              <option value="minsize">Mini Size</option>
            </select>
          </div>
        </div>

        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Summary"
            style={{ width: "575px" }}
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "140px" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
