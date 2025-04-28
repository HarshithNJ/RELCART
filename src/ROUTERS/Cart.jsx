import React, { useContext, useState } from 'react'
import { CartContext } from '../CartContext'

const Cart = () => {

  let {cartItem} = useContext(CartContext)

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
      {cartItem ? (
          <div className="cart_Card">
            <img src={cartItem.image} alt={cartItem.name} width="200" />
            <h2>{cartItem.name}</h2>
            <p>Size: {cartItem.size}</p>
            <p>Rs. {cartItem.price}</p>
            <div id='prodValue'>
              <button onClick={handleDecrement}> - </button>
              <h4>{count}</h4>
              <button onClick={handleIncrement}> + </button>
            </div>
            <h3>Total: Rs. {cartItem.price * count}</h3>
          </div>
      ): (
        <p>No item in cart.</p>
      )}
    </div>
  )
}

export default Cart