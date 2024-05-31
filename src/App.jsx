import React, { Suspense, lazy, useEffect, useContext, useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductContext, ProductContextProvider } from './contexts/ProductsContext';
import Root from './routes/Root';
import { appRoutes } from './routes/routes';

export default function App() {
  const { products, isLoading, refetchProducts } = useContext(ProductContext);
  const [productList, setProductList] = useState([])

  useEffect(() => {
    fetch(`./products.json`)
      .then((response) => response.json())
      .then((data) => {
        setProductList(data)
      })
  }, []);

  return (
    <ProductContextProvider>
      <BrowserRouter>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<Root />}>
              {appRoutes.map((route) => {
                return (
                  <Route
                    key={route.component.toString()}
                    path={route.path}
                    index={route.index}
                    element={
                      <route.component
                        productsArr={productList}
                        setProductsArr={setProductList}
                      />}
                  />
                )
              })}
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ProductContextProvider>
  );
}