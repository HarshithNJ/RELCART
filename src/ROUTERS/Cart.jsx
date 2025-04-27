import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

const Cart = () => {
  
  let location = useLocation()

  let prod = location.state;
  let [count, setCount] = useState(1)


  let handleIncrement = ()=> {
    setCount(count+1)
  }


  let handleDecrement = ()=> {
    setCount(count => (count > 1 ? count - 1 : 1))
  }


  return (
    <div className='cart'>
      <h1>Cart Details</h1>
      {prod ? (
          <div className="cart_Card">
            <img src={prod.image} alt={prod.name} width="200" />
            <h2>{prod.name}</h2>
            <p>Size: {prod.size}</p>
            <p>Rs. {prod.price}</p>
            <div id='prodValue'>
              <button onClick={handleDecrement}> - </button>
              <h4>{count}</h4>
              <button onClick={handleIncrement}> + </button>
            </div>
            <h3>Total: Rs. {prod.price * count}</h3>
          </div>
      ): (
        <p>No item in cart.</p>
      )}
    </div>
  )
}

export default Cart