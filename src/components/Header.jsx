import React, { useState } from 'react';
import Navigation from './Navigation';
import Cart from './Cart';

export const Header = () => {
        const [isModalOpen, setIsModalOpen] = useState(false);

        const toggleModal = () => {
                setIsModalOpen(!isModalOpen);
        };

        return (
                <header className="header">
                        <div className="mainHeading">
                                <h1>ODell's Online Store</h1>
                        </div>
                        <Navigation />
                        <button className="cart-button" onClick={toggleModal}>
                                Cart
                        </button>
                        {isModalOpen && (
                                <div className="modal-overlay" onClick={toggleModal}>
                                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                                <button className="close-button" onClick={toggleModal}>
                                                        X
                                                </button>
                                                <Cart />
                                        </div>
                                </div>
                        )}
                </header>
        );
};