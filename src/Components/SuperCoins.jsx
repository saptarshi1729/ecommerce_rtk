import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const SuperCoins = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const [superCoins, setSuperCoins] = useState(0);
    useEffect(() => {   // The useEffect hook listens for changes to totalAmount.
        // When totalAmount changes, the useEffect hook will run again.
        if (totalAmount >= 500 && totalAmount < 1000) {
            setSuperCoins(10);
        } else if (totalAmount >= 1000 && totalAmount < 3000) {
            setSuperCoins(20);
        } else if (totalAmount >= 3000) {
            setSuperCoins(30);
        } else {
            setSuperCoins(0);
        }
    }, [totalAmount]);
    return (
        <>
            <div className="super-coins" style={{ textAlign: 'center' }}>
                <h2 className="super-coins-title">Super Coins</h2>
                <p className="super-coins-info">You will earn {superCoins} super coins with this purchase.</p>
            </div>
        </>
    );
};

export default SuperCoins;