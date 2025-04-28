import React, { Fragment, useContext } from 'react'
import shoe from "./API/shoes.json"
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../CartContext';

const Shoes = () => {
  console.log(shoe);
  
  let navigate = useNavigate()

  let {addToCart} = useContext(CartContext)

  let handleCart = (footwear)=> {
    addToCart(footwear)
    navigate("/cart");
  }
  
  return (
    <div>
      <div className="shoe">
        {
          shoe.map((footwear, index)=> {

            return(
                <div key={index}>
                  <img src={footwear.image} alt="Images" />
                  <h1>{footwear.name}</h1>
                  <p>Size : {footwear.size}</p>
                  <h3>Rs. {footwear.price}</h3>
                  <button onClick={()=> {handleCart(footwear)}}>Add to Cart</button>
                </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Shoes