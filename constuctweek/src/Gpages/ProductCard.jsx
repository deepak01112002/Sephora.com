import React from "react";
import { Link } from "react-router-dom";

import { Tr, Td } from "@chakra-ui/react";

export const ProductCard = ({ image, title, brand, price, id }) => {
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
    </Tr>
  );
};
