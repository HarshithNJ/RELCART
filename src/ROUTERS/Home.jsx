import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import logo from './resources/images/logo.png'

const Home = () => {
  let navigate = useNavigate()

  let handleShow = ()=> {
    navigate("/home")
  }

  return (
    <div className='home'>
      <div className="nav">
        <div id="logo">
          <Link to='/'><img src={logo} alt="LOGO" /></Link>
          <h1>RELCART</h1>
        </div>
        <ul>
          <li onClick={handleShow}><Link className='link' to='/home'>Home</Link></li>
          <li><Link className='link' to='/product'>Product</Link></li>
          <li><Link className='link' to='/cart'>Cart</Link></li>
        </ul>
        <div id="btns">
          <button><Link className='link1' to='/register'>Register</Link></button>
          <button><Link className='link1' to='/login'>Log In</Link></button>
        </div>
      </div>

      <div id="display">
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Home