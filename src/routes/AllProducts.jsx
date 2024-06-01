import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../contexts/ProductsContext";
import { productList } from "../data/productList";

export default function AllProducts() {
  const { products, isLoading, refetchProducts } = useContext(ProductContext);
  const [productsArr, setProductsArr] = useState(products);
  const [filterValue, setFilterValue] = useState(''); 

  useEffect(() => {
      console.log()
    const filteredProducts =
      filterValue === ''
        ? products
        :  products.filter(product => product.productType.includes(filterValue)
          )
    setProductsArr(filteredProducts);
  }, [filterValue]);


    const filterProductsByType = () => {
        return products.filter(product =>
            product.productType.includes(selectedType)
        );
    };
  
  return (
    <div className="all-products">
      <div className="header-container">
        <h2 className="mdHeading">Our Products</h2>
        <select
          value={filterValue}
          onChange={(e) => {
              const val = e.target.value
            e.preventDefault(val)
              setFilterValue(val)
            }}
          className="filter-dropdown"
        >
          <option value="">All</option>
          <option value="pants">pants</option>
          <option value="jeans">Type 2</option>
          <option value="shirt">Type 2</option>
          <option value="t-shirt">t-shirt</option>
          <option value="hoodie">Type 2</option>
          <option value="sweatshirt">Type 2</option>
        </select>
      </div>

      <ul className="product-grid">
        {productsArr.map((product) => (
          <li key={product.id} className="product-card">
            <Link to={`/products/${product.id}`}>
              <img src={`${product.image}`} alt={product.name} />
              <p>{product.name}</p>
              <p>${product?.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}