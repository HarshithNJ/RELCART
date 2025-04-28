import React, { useContext } from 'react'
import shirts from "./API/shirts.json"
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../CartContext';

const Shirts = () => {
  console.log(shirts);
  
  let navigate = useNavigate()
  
  let {addToCart} = useContext(CartContext)

  let handleCart = (top)=> {
    addToCart(top)
    navigate("/cart");
  }
  
  return (
    <div>
      <div className="shirt">
        {
          shirts.map((top, index)=> {

            return(
                <div key={index}>
                  <img src={top.image} alt="Images" />
                  <h1>{top.name}</h1>
                  <p>Size : {top.size}</p>
                  <h3>Rs. {top.price}</h3>
                  <button onClick={()=> {handleCart(top)}}>Add to Cart</button>
                </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Shirts