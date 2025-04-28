import React, { useContext } from 'react'
import pants from "./API/pants.json"
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../CartContext';

const Pants = () => {
  console.log(pants);
  
  let navigate = useNavigate()

  let {addToCart} = useContext(CartContext)

  let handleCart = (bottoms)=> {
    addToCart(bottoms)
    navigate("/cart");
  }
  
  return (
    <div>
      <div className="pant">
        {
          pants.map((bottoms, index)=> {

            return(
                <div key={index}>
                  <img src={bottoms.image} alt="Images" />
                  <h1>{bottoms.name}</h1>
                  <p>Size : {bottoms.size}</p>
                  <h3>Rs. {bottoms.price}</h3>
                  <button onClick={()=> {handleCart(bottoms)}}>Add to Cart</button>
                </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Pants