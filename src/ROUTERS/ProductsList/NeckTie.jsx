import React, { useContext } from 'react'
import tie from "./API/ties.json"
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../CartContext';

const NeckTie = () => {
  console.log(tie);
  
  let navigate = useNavigate()

  let {addToCart} = useContext(CartContext)

  let handleCart = (neck)=> {
    addToCart(neck)
    navigate("/cart");
  }
  
  return (
    <div>
      <div className="ties">
        {
          tie.map((neck, index)=> {
            // console.log(tie);

            return(
                <div key={index}>
                  <img src={neck.image} alt="Images" />
                  <h1>{neck.name}</h1>
                  <p>Size : {neck.size}</p>
                  <h3>Rs. {neck.price}</h3>
                  <button onClick={()=> {handleCart(neck)}}>Add to Cart</button>
                </div>
            )
            
          })
        }
      </div>
    </div>
  )
}

export default NeckTie