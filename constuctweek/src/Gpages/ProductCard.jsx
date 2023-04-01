import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
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
    <Tr>
           <Td scope="row">{id}</Td>
            <Td>
              <img src={image} alt="Product Image" width={50} />
            </Td>
            <Td>{title}</Td>
            <Td>{brand}</Td>
            <Td>{price}</Td>
            <Td>
              <Link to={`/edit/${id}`}>Edit</Link>
            </Td>
          
        
    
       {/* <img src={image} alt="Product Image" />
      <h3>{title}</h3>
      <h3>Price : ${price}</h3>
      <p>Brand: {brand}</p>
      <p>{rating}</p>
      <p>{description}</p>
      <button>
        <Link to={`/edit/${id}`}>Edit</Link>
      </button> */}
    </Tr>
  );
};