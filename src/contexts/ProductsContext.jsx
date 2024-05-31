import React, { createContext, useState, useEffect, useCallback } from "react";
import { productList } from "../data/productList";
export const ProductContext = createContext({
  products: [],
  isLoading: false,
  refetchProducts: () => {},
});

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchCount, setFetchCount] = useState(0);

  // Fetch data from local json
  const refetchProducts = useCallback(async () => {
    try {
      const response = await fetch(`./products.json`);
      const data = await response.json();
      setProducts(data);
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    console.log("First data fetched");
    setProducts(productList);
  }, []);

  return (
    <ProductContext.Provider value={{ products, isLoading, refetchProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
