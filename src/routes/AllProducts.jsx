import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../contexts/ProductsContext";
import { productList } from "../data/productList";

export default function AllProducts() {
  const { products, isLoading, refetchProducts } = useContext(ProductContext);
  const [productsArr, setProductArr] = useState(products);

  useEffect(() => {
    if (products.length < 1) {
      setProductArr(productList);
    } else {
      console.log("data already set", products);
      setProductArr(products);
    }
  }, [products.length]);

  return (
    <div className="all-products">
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/products/${product.id}`}>
              <img src={`${product.image}`} alt={product.name} />
              <p>{product.name}</p>
              <p>${product?.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
