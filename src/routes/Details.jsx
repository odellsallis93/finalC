
import { useParams } from 'react-router-dom';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ProductContext } from '../contexts/ProductsContext';
import { productList } from '../data/productList';
import { CartContext } from '../contexts/CartContext';

export default function Details(props) {
        const { refetch, productsList, setFetchCount, setProductsList, fetchCount } = props;
        const params = useParams();
        const { addToCart } = useContext(CartContext);
        const { products, isLoading, refetchProducts } = useContext(ProductContext);

        useEffect(() => {
                refetchProducts()
                console.log("refetch called from app");
                setProductsList(products)

        }, []);
        
        const handleProductArrFall = products.map((section) => {
                return section.items.find((item) => item.id === params.id);
        });
                   /*    console.log("section did not match", section.items);
                               
                  } else if (section.name === "shirts") {
                                return section.items.find((item) => item.id === params.id)
                        } else if (section.name === "tops") {
                                return section.items.find((item) => item.id === params.id)
                        }else {
                              
                        } 
                }) */
        
const handleProductArr = productList.map((section) => {
        return section.items.find((item) => item.id === params.id);
});
               /*  console.log("section did not match", section.items);
                              return section.items.find((item) => item.id === params.id)
                        } else if (section.name === "shirts") {
                                return section.items.find((item) => item.id === params.id)
                        } else if (section.name === "tops") {
                                return section.items.find((item) => item.id === params.id)
                        }else {
                                console.log("section did not match", section.items);
                        } 
                })
        } */


        const getDataFallback = handleProductArr.find((item) => item?.id === params.id)
        const dataFromContext = handleProductArrFall.find((item) => item.id === params.id)

        const productItem = products.length > 0 ? dataFromContext : getDataFallback
        
        const [product, setProduct] = useState(productItem)
        
        const [productMatch, setProductMatch] = useState(product)

        const getProduct = () => {
               // console.log("handleProductArrFall", handleProductArrFall)
                console.log("getDataFallback", getDataFallback)
                
                if (!product) {
                        console.log("data fallback used", getDataFallback);
                        setProduct(getDataFallback)
                } else {
                        console.log("product is", product)
                }
        }

        useEffect(() => {
                console.log("products", products)
                        console.log("refetchCallback called");
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