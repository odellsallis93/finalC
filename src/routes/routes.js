import React, { Suspense, lazy, useEffect, useContext, useState } from "react";
const Welcome = lazy(() => import("./Welcome"));
import Details from "./Details";
import AllProducts from "./AllProducts";
const NotFound = lazy(() => import("./NotFound"));

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
