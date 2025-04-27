import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./product.css"

const Product = () => {
  return (
    <div className='prod'>
      <div className='prodnav'>
        <ul>
          <li><Link className='linker' to='/product/headwear'>Hats</Link></li>
          <li><Link className='linker' to='/product/neckwear'>Neck Ties</Link></li>
          <li><Link className='linker' to='/product/shirts'>Shirts</Link></li>
          <li><Link className='linker' to='/product/pants'>Pants</Link></li>
          <li><Link className='linker' to='/product/shoes'>Shoes</Link></li>
        </ul>
      </div>

      <div id='display1'>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Product