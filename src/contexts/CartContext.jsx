// CartContext.js
import React, { createContext, useReducer } from 'react';

const initialState = {
        items: [],
        totalAmount: 0,
};

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';


export const CartContext = createContext();

function cartReducer(state, action) {
        switch (action.type) {
                case ADD_TO_CART:
                        const updatedItems = [...state.items, action.item];
                        const updatedTotalAmount = state.totalAmount + action.item.price;
                        return {
                                items: updatedItems,
                                totalAmount: updatedTotalAmount,
                        };
                case REMOVE_FROM_CART:
                        const filteredItems = state.items.filter(item => item.id !== action.id);
                        const itemToRemove = state.items.find(item => item.id === action.id);
                        const newTotalAmount = state.totalAmount - itemToRemove.price;
                        return {
                                items: filteredItems,
                                totalAmount: newTotalAmount,
                        };
                default:
                        return state;
        }
}


export function CartContextProvider({ children }) {
        const [cartState, dispatch] = useReducer(cartReducer, initialState);

        const addToCart = (item) => {
                dispatch({ type: ADD_TO_CART, item });
        };

        const removeFromCart = (id) => {
                dispatch({ type: REMOVE_FROM_CART, id });
        };

        return (
                <CartContext.Provider value={{ cartState, addToCart, removeFromCart }}>
                        {children}
                </CartContext.Provider>
        );
}
