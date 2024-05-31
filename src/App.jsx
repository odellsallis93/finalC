import React, { Suspense, lazy, useEffect, useContext, useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductContext, ProductContextProvider } from './contexts/ProductsContext';
import Root from './routes/Root';
import Navigation from './components/Navigation';
import { appRoutes } from './routes/routes';

export default function App() {
  const { products, isLoading, refetchProducts } = useContext(ProductContext);
  const [fetchCount, setFetchCount] = useState(0)
  const [productsList, setProductsList] = useState([])


  useEffect(() => {
    fetch(`./products.json`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Data called from app", data)
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
                        productsList={productsList}
                        setProductsList={setProductsList}
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