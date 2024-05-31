import { useParams } from "react-router-dom";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { ProductContext } from "../contexts/ProductsContext";
import { productList } from "../data/productList";
import { CartContext } from "../contexts/CartContext";

export default function Details(props) {
  const { refetch, productsArr, setFetchCount, setProductsArr, fetchCount } =
    props;
  const params = useParams();
  const { addToCart } = useContext(CartContext);
  const { products, isLoading } = useContext(ProductContext);
  const getDataFallback = products.find((item) => item.id === params.id);
  const [product, setProduct] = useState(getDataFallback);

  /*   const handleProductArrFall = products.map((section) => {
    return section.items.find((item) => item.id === params.id);
  });

  const handleProductArr = () => {
    productList.map((section) => {
      return section.items.find((item) => item.id === params.id);
    });
  }; */

  /*   const dataFromContext = handleProductArrFall.find(
    (item) => item.id === params.id,
  ); */

  const getProduct = () => {
    setProduct(getDataFallback);
  };

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  const addItemToCart = () => {
    addToCart(getDataFallback);
  };

  return (
    <>
      {isLoading === false && (
        <>
          <h1>{getDataFallback?.name}</h1>
          <img
            className="product-img"
            src={`${getDataFallback?.image}`}
            alt={getDataFallback?.name}
          />
          <p>{getDataFallback?.description}</p>
          <p>${getDataFallback?.price?.toFixed(2)}</p>
          <button className="addToCartBtn" onClick={addItemToCart}>
            Add to Cart
          </button>
        </>
      )}
    </>
  );
}
