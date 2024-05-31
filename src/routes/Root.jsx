import { Outlet } from 'react-router-dom';
import Layout from '../components/Layout';
import React from 'react';

export default function Root() {
        
        return (
              
                <Layout>
                        <Outlet />
                </Layout>
                       
        );
}