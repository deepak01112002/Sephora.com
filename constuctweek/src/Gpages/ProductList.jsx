import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/productReducer/action";
import { useLocation, useSearchParams } from "react-router-dom";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const location = useLocation();

  const { products } = useSelector((store) => store.productReducer);

  let obj = {
    params: {
      category: searchParams.getAll("category"),
    },
  };

  useEffect(() => {
    dispatch(getProducts(obj));
  }, [location.search]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">IMAGE</th>
            <th scope="col">TITLE</th>
            <th scope="col">BRAND</th>
            <th scope="col">PRICE</th>
            <th scope="col">STATUS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {products.length > 0 &&
              products.map((el) => {
                return <ProductCard key={el.id} {...el} />;
              })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
