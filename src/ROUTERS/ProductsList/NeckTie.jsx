import React, { Fragment } from 'react'
import tie from "./API/ties.json"
import { useNavigate } from 'react-router-dom';

const NeckTie = () => {
  console.log(tie);
  
  let navigate = useNavigate()

  let handleCart = (neck)=> {
    navigate("/cart", {state: neck});
  }
  
  return (
    <div>
      <div className="ties">
        {
          tie.map((neck)=> {
            // console.log(tie);

            return(
              <Fragment>
                <div>
                  <img src={neck.image} alt="Images" />
                  <h1>{neck.name}</h1>
                  <p>Size : {neck.size}</p>
                  <h3>Rs. {neck.price}</h3>
                  <button onClick={()=> {handleCart(neck)}}>Add to Cart</button>
                </div>
              </Fragment>
            )
            
          })
        }
      </div>
    </div>
  )
}

export default NeckTie