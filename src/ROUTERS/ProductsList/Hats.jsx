import React, { Fragment } from 'react'
import hat from "./API/hats.json"
import { useNavigate } from 'react-router-dom';

const Hats = () => {
  console.log(hat);

  let navigate = useNavigate()

  let handleCart = (headwear)=> {
    navigate("/cart", {state: headwear})
  }
  
  return (
    <div>
      <div className='hats'>
        {
          hat.map((headwear)=> {
            // console.log(headwear);
            
            return(
              <Fragment>
                <div>
                  <img src={headwear.image} alt="Images" />
                  <h1>{headwear.name}</h1>
                  <p>Size : {headwear.size}</p>
                  <h3>Rs. {headwear.price}</h3>
                  <button onClick={()=> {handleCart(headwear)}}>Add to Cart</button>
                </div>
              </Fragment>
            )
          })
        }
      </div>
    </div>
  )
}

export default Hats