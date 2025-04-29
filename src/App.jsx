import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import "./App.css"
import Home from './ROUTERS/Home'
import Register from './ROUTERS/Register'
import LogIn from './ROUTERS/LogIn'
import Product from './ROUTERS/Product'
import Hats from './ROUTERS/ProductsList/Hats'
import NeckTie from './ROUTERS/ProductsList/NeckTie'
import Shirts from './ROUTERS/ProductsList/Shirts'
import Pants from './ROUTERS/ProductsList/Pants'
import Shoes from './ROUTERS/ProductsList/Shoes'
import Cart from './ROUTERS/Cart'
import Show from './ROUTERS/resources/Show'
import { CartProvider } from './CartContext'


let routers = createBrowserRouter([
    {
        path : "/",
        element : <Navigate to="/home" replace = {true}/>
    },
    {
        path : "/",
        element : <Home></Home>,
        children : [
            {
                path : "/home",
                element : <Show></Show>
            },
            {
                path : "/register",
                element : <Register></Register>
            },
            {
                path : "/login",
                element : <LogIn></LogIn>
            },
            {
                path : "/product",
                element : <Product></Product>,
                children : [
                    {
                        path : "/product/headwear",
                        element : <Hats></Hats>
                    },
                    {
                        path : "/product/neckwear",
                        element : <NeckTie></NeckTie>
                    },
                    {
                        path : "/product/shirts",
                        element : <Shirts></Shirts>
                    },
                    {
                        path : "/product/pants",
                        element : <Pants></Pants>
                    },
                    {
                        path : "/product/shoes",
                        element : <Shoes></Shoes>
                    }
                ]
            },
            {
                path : "/cart",
                element : <Cart></Cart>
            }
        ]
    }
])

const App = () => {
  return (
    <div>
        <CartProvider>
            <RouterProvider router={routers}></RouterProvider>
        </CartProvider>
    </div>
  )
}

export default App