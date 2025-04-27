import React, { Fragment } from 'react'
import shoe from "./API/shoes.json"
import { useNavigate } from 'react-router-dom';

const Shoes = () => {
  console.log(shoe);
  
  let navigate = useNavigate()

  let handleCart = (footwear)=> {
    navigate("/cart", {state: footwear});
  }
  
  return (
    <div>
      <div className="shoe">
        {
          shoe.map((footwear)=> {

            return(
              <Fragment>
                <div>
                  <img src={footwear.image} alt="Images" />
                  <h1>{footwear.name}</h1>
                  <p>Size : {footwear.size}</p>
                  <h3>Rs. {footwear.price}</h3>
                  <button onClick={()=> {handleCart(footwear)}}>Add to Cart</button>
                </div>
              </Fragment>
            )
          })
        }
      </div>
    </div>
  )
}

export default Shoes