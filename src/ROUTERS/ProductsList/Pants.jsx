import React, { Fragment } from 'react'
import pants from "./API/pants.json"
import { useNavigate } from 'react-router-dom';

const Pants = () => {
  console.log(pants);
  
  let navigate = useNavigate()

  let handleCart = (bottoms)=> {
    navigate("/cart", {state: bottoms});
  }
  
  return (
    <div>
      <div className="pant">
        {
          pants.map((bottoms)=> {

            return(
              <Fragment>
                <div>
                  <img src={bottoms.image} alt="Images" />
                  <h1>{bottoms.name}</h1>
                  <p>Size : {bottoms.size}</p>
                  <h3>Rs. {bottoms.price}</h3>
                  <button onClick={()=> {handleCart(bottoms)}}>Add to Cart</button>
                </div>
              </Fragment>
            )
          })
        }
      </div>
    </div>
  )
}

export default Pants