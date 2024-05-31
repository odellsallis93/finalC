import { Link } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../contexts/ProductsContext';

/* Set the dynamic url parameter "productID" for the Route path matching "/products/:productID" to `${product.id}` */
export default function AllProducts() {
        const { products, isLoading, refetchProducts } = useContext(ProductContext);
        const [productList, setProductList] = useState([])

        useEffect(() => {
                fetch(`./products.json`)
                        .then((response) => response.json())
                        .then((data) => {
                                console.log("Data called from all products", data)
                                setProductList(data)
                        })
        }, []);

        return (
                <div className="all-products">
                        {productList.map(section => (
                                <div key={section.name} className="section">
                                        <h2>{section.category}</h2>
                                        <p>{section.catDescription}</p>
                                        <div className="product-list">
                                                {section.items.map(product => (
                                                        <div key={product.id} className="product-card">
                                                                <Link to={`/products/${product.id}`}>
                                                                        <img src={`${product.image}.jpg`} alt={product.name} />
                                                                        <p>{product.name}</p>
                                                                        <p>${product?.price}</p>
                                                                </Link>
                                                        </div>
                                                ))}
                                        </div>
                                </div>
                        ))}
                </div>
        );
}