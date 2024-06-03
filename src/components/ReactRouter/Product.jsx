import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();
  return <div>Product details for product ID: {productId}</div>;
};

export default Product;
