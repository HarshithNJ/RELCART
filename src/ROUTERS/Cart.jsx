import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const [quantities, setQuantities] = useState({});

  const handleIncrement = (id) => {
    setQuantities(prev => ({
      ...prev,
      [id]: (prev[id] || 1) + 1
    }));
  };

  const handleDecrement = (id) => {
    setQuantities(prev => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1
    }));
  };

  return (
    <div className='cart'>
      <h1>Cart Details</h1>
      <div className="arrange">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index} className="cart_Card">
              <img src={item.image} alt={item.name} width="200" />
              <h2>{item.name}</h2>
              <p>Size: {item.size}</p>
              <p>Rs. {item.price}</p>
              <div id='prodValue'>
                <button onClick={() => handleDecrement(index)}> - </button>
                <h4>{quantities[index] || 1}</h4>
                <button onClick={() => handleIncrement(index)}> + </button>
              </div>
              <h3>Total: Rs. {(item.price * (quantities[index] || 1)).toLocaleString()}</h3>
            </div>
          ))
        ) : (
          <p>No item in cart.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
