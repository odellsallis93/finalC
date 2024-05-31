import React, { Suspense, lazy, useEffect, useContext, useState } from 'react';
import Welcome from './Welcome';
const Details = lazy(() => import('./Details'));
const AllProducts = lazy(() => import('./AllProducts'))
const NotFound = lazy(() => import('./NotFound'));


export const appRoutes = [
        {
                component: Welcome,
                index: true,
        },
        {
                path: "/products/:id",
                component: Details,
        },
        {
                path: "/products",
                component: AllProducts,
        },
        {
                path: "*",
                component: NotFound,
        },
];