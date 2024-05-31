import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
        return (
                <div id="main-nav">
                        <nav>
                                <ul>
                                        <li>
                                                <NavLink
                                                        to="/"
                                                        className={({ isActive }) => (isActive ? 'active' : '')}
                                                >
                                                        Home
                                                </NavLink>
                                        </li>
                                        <li>
                                                <NavLink
                                                        to="/products"
                                                        className={({ isActive }) => (isActive ? 'active' : '')}
                                                >
                                                        Our Products
                                                </NavLink>
                                        </li>
                                </ul>
                        </nav>
                </div>
        );
}