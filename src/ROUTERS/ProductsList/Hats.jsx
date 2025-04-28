import React, { useContext } from 'react'
import hat from "./API/hats.json"
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../CartContext';

const Hats = () => {
  console.log(hat);

  let navigate = useNavigate()

  let {addToCart} = useContext(CartContext)

  let handleCart = (headwear)=> {
    addToCart(headwear)
    navigate("/cart")
  }
  
  return (
    <div>
      <div className='hats'>
        {
          hat.map((headwear, index)=> {
            // console.log(headwear);
            
            return(
                <div key={index}>
                  <img src={headwear.image} alt="Images" />
                  <h1>{headwear.name}</h1>
                  <p>Size : {headwear.size}</p>
                  <h3>Rs. {headwear.price}</h3>
                  <button onClick={()=> {handleCart(headwear)}}>Add to Cart</button>
                </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Hats