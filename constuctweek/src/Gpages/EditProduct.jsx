import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { editProduct } from "../redux/productReducer/action";

export const EditProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState("");
  const [success, setSuccess] = useState(false);

  const product = useSelector((store) => store.productReducer.products);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    // console.log(data);
    dispatch(editProduct(data, id)).then(() => {
      setSuccess(true);
    });
  };

  useEffect(() => {
    const data = product.find((el) => el.id === +id);
    // console.log(data);
    setData(data);

    // console.log(id);
  }, []);
  return (
    <DIV>
      <h3>Edit Product:{id}</h3>
      <h2>{success && "Product Edit Successfully!"}</h2>
      <form
        onSubmit={handleEdit}
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
              name={"title"}
              placeholder="Title"
              value={data.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image</label>
            <input
              style={{ width: "420px" }}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name={"image"}
              placeholder="Link"
              value={data.image}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Color</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name={"color"}
              placeholder="Color"
              value={data.color}
              onChange={handleChange}
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
              name={"brand"}
              placeholder="Brand"
              value={data.brand}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name={"price"}
              placeholder="$"
              value={data.price}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3" style={{ width: "205px" }}>
            <label className="form-label">Category</label>
            <select
              name={"category"}
              id=""
              value={data.category}
              className="form-control"
              onChange={handleChange}
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
          <div className="mb-3">
            <label className="form-label">Rating</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name={"rate"}
              placeholder="Rating"
              value={data.rate}
              onChange={handleChange}
            />
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
            name={"description"}
            value={data.description}
            placeholder="Summary"
            onChange={handleChange}
            style={{ width: "575px" }}
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "140px" }}
        >
          Edit
        </button>
      </form>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  margin: 40px auto;
  border: 1px solid grey;
  padding: 20px;

  input {
    width: 80%;
    height: 40px;
    font-size: large;
  }
  button {
    width: 28%;
    height: 35px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
  select {
    width: 81.5%;
    height: 30px;
    font-size: large;
  }
`;
