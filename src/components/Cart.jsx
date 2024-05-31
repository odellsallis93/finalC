
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export default function Cart() {
        const { cartState, removeFromCart } = useContext(CartContext);

        const handleRemove = (id) => {
                removeFromCart(id);
        };

        return (
                <div className="cart">
                        <h2>Your Cart</h2>
                        {cartState.items.length === 0 && <p>No items in the cart.</p>}
                        <ul>
                                {cartState.items.map((item) => (
                                        <li key={item.id}>
                                                {item.name} - ${item.price.toFixed(2)}
                                                <button onClick={() => handleRemove(item.id)}>Remove</button>
                                        </li>
                                ))}
                        </ul>
                        <p>Total Amount: ${cartState.totalAmount.toFixed(2)}</p>
                </div>
        );
}

