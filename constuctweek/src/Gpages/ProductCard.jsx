import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export const ProductCard = ({
  image,
  title,
  description,
  color,
  brand,
  category,
  rating,
  price,
  id,
}) => {
  return (
    <div>
      <table class="table">
        <tbody>
          <tr>
            <th scope="row">{id}</th>
            <td>
              <img src={image} alt="Product Image" width={50} />
            </td>
            <td>{title}</td>
            <td>{brand}</td>
            <td>{price}</td>
            <td>
              <Link to={`/edit/${id}`}>Edit</Link>
            </td>
          </tr>
        </tbody>
      </table>
      {/* <img src={image} alt="Product Image" />
      <h3>{title}</h3>
      <h3>Price : ${price}</h3>
      <p>Brand: {brand}</p>
      <p>{rating}</p>
      <p>{description}</p>
      <button>
        <Link to={`/edit/${id}`}>Edit</Link>
      </button> */}
    </div>
  );
};
// const DIV = styled.div`
//   border: 1px solid gray;
//   padding: 10px;
//   width: 250px;
//   text-align: center;

//   img {
//     width: 100%;
//     height: 250px;
//   }
// `;
