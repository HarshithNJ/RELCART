import React, { Fragment } from 'react'
import shirts from "./API/shirts.json"
import { useNavigate } from 'react-router-dom';

const Shirts = () => {
  console.log(shirts);
  
  let navigate = useNavigate()

  let handleCart = (top)=> {
    navigate("/cart", {state: top});
  }
  
  return (
    <div>
      <div className="shirt">
        {
          shirts.map((top)=> {

            return(
              <Fragment>
                <div>
                  <img src={top.image} alt="Images" />
                  <h1>{top.name}</h1>
                  <p>Size : {top.size}</p>
                  <h3>Rs. {top.price}</h3>
                  <button onClick={()=> {handleCart(top)}}>Add to Cart</button>
                </div>
              </Fragment>
            )
          })
        }
      </div>
    </div>
  )
}

export default Shirts