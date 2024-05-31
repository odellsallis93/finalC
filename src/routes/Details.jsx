
import { useParams } from 'react-router-dom';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ProductContext } from '../contexts/ProductsContext';
import { productList } from '../data/productList';
import { CartContext } from '../contexts/CartContext';

export default function Details(props) {
        const { refetch, productsArr, setFetchCount, setProductsArr, fetchCount } = props;
        const params = useParams();
        const { addToCart } = useContext(CartContext);
        const { products, isLoading, refetchProducts } = useContext(ProductContext);

        const handleProductArrFall = products.map((section) => {
                return section.items.find((item) => item.id === params.id);
        });

        const handleProductArr = productList.map((section) => {
                return section.items.find((item) => item.id === params.id);
        });


        const getDataFallback = handleProductArr.find((item) => item?.id === params.id)
        const dataFromContext = handleProductArrFall.find((item) => item.id === params.id)

        const productItem = products.length > 0 ? dataFromContext : getDataFallback

        const [product, setProduct] = useState(productItem)

        const [productMatch, setProductMatch] = useState(product)

        const getProduct = () => {
                if (!product) {
                        setProduct(getDataFallback)
                }
        }

        useEffect(() => {
                getProduct()
        }, []);

        const addItemToCart = () => {
                
                addToCart(product);
        };

        return (
                <>
                        <h1>{product?.name}</h1>
                        <img className='product-img' src={`${product.image}`} alt={product.name} />
                        <p>{product?.description}</p>
                        <p>${product?.price?.toFixed(2)}</p>
                        <button className='addToCartBtn' onClick={addItemToCart}>Add to Cart</button>
                </>
        )
}