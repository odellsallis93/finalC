import { Outlet } from 'react-router-dom';
import Layout from '../components/Layout';
import React from 'react';
import { ProductContextProvider } from '../contexts/ProductsContext';

export default function Root() {
        
        return (
              
                <Layout>
                        <Outlet />
                </Layout>
                       
        );
}