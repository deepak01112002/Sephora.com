import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/productReducer/action";
import { useLocation, useSearchParams } from "react-router-dom";
import { ProductCard } from "./ProductCard";

import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";

export const ProductList = () => {
  const [searchParams, setParams] = useSearchParams();
  const [page, setpage] = useState(1);

  const dispatch = useDispatch();

  const location = useLocation();

  const { products } = useSelector((store) => store.productReducer);

  let obj = {
    params: {
      category: searchParams.getAll("category"),
      _limit: 10,
      _page: searchParams.get("page"),
    },
  };

  useEffect(() => {
    const params = {
      page,
    };
    dispatch(getProducts(obj));
    setParams(params);
  }, [location.search, page]);

  return (
    <div>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>IMAGE</Th>
              <Th>TITLE</Th>
              <Th>BRAND</Th>
              <Th>PRICE</Th>
              <Th>STATUS</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.length > 0 &&
              products.map((el) => {
                return <ProductCard key={el.id} {...el} />;
              })}
          </Tbody>
        </Table>
      </TableContainer>
      <div style={{ display: "block", width: "140px", margin: "auto" }}>
        <button
          style={{ padding: "10px" }}
          disabled={page === 1}
          onClick={() => setpage(page - 1)}
        >
          Prev
        </button>
        <button style={{ padding: "10px" }} disabled>
          {page}
        </button>
        <button style={{ padding: "10px" }} onClick={() => setpage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};
