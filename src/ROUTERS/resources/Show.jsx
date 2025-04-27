import React from 'react'
import promo from "./videos/promo.mp4"
import fashion from "./videos/fashion.mp4"
import hats from "./images/hats.png"
import tie from "./images/ties.png"
import shirts from "./images/shirts.png"
import pants from "./images/pants.png"
import shoe from "./images/shoes.png"
import './Show.css'
import { useNavigate } from 'react-router-dom'

const Show = () => {

  let navigate = useNavigate()

  let handleHat = ()=> {
    navigate("/product/headwear")
  }

  let handleTie = ()=> {
    navigate("/product/neckwear")
  }

  let handleShirt = ()=> {
    navigate("/product/shirts")
  }

  let handlePant =()=> {
    navigate("/product/pants")
  }

  let handleShoe = ()=> {
    navigate("/product/shoes")
  }
  return (
    <div className='show'>
        <div id="promos">
          <h1>OFFERS</h1>
          <div id="promo">
            <div>
              <video src={promo} height='550px' width='400px' autoPlay controls></video>
              <h3>Relcart Sourcing</h3>
            </div>

            <div>
            <video src={fashion} height='550px' width='800px' autoPlay controls></video>
            <h3>Special Features of The Day...!</h3>
            </div>
          </div>
        </div>


      <h2>PRODUCTS</h2>
      <div className="navigator">
        <div>
            <img src={hats} alt="Hats" />
            <h4>HATS</h4>
            <button onClick={handleHat}>VIEW ALL</button>
        </div>
        <div>
            <img src={tie} alt="Tie" />
            <h4>NECK TIE</h4>
            <button onClick={handleTie}>VIEW ALL</button>
        </div>
        <div>
            <img src={shirts} alt="Shirts" />
            <h4>SHIRTS</h4>
            <button onClick={handleShirt}>VIEW ALL</button>
        </div>
        <div>
            <img src={pants} alt="Pants" />
            <h4>PANTS</h4>
            <button onClick={handlePant}>VIEW ALL</button>
        </div>
        <div>
            <img src={shoe} alt="Shoes" />
            <h4>SHOES</h4>
            <button onClick={handleShoe}>VIEW ALL</button>
        </div>
      </div>
    </div>
  )
}

export default Show