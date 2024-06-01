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
                        const itemIndex = state.items.findIndex(item => item.id === action.id);
                        if (itemIndex === -1) return state; // If the item is not found, return the current state

                        // Create a copy of the items array without the specific item to remove
                        const newItems = [...state.items];
                        const itemToRemove = newItems[itemIndex];
                        newItems.splice(itemIndex, 1);
                        const newTotalAmount = state.totalAmount - itemToRemove.price;
                        return {
                                items: newItems,
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