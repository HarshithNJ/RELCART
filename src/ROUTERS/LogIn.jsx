import axios from 'axios'
import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import reg from '../../backend/Data.json'

const LogIn = () => {

  let navigate = useNavigate()

  let handleRegister = ()=> {

    navigate("/register")
  }

  let [state, setState] = useState({
    username : "",
    password : ""
  })

  let {username, password} = state

  let handleLogin = (e)=> {
    let {name, value} = e.target

    setState({...state, [name]: value})
  }



  let handleSubmit = async(e)=> {
    e.preventDefault()

    try{

      const user = reg.Registered_User.find(
        (user) => user.username === username
      )
  
      if (!user) {
        alert("Username not found.")
        return
      }
  
      if (user.password !== password) {
        alert("Incorrect password.")
        return
      }

      navigate("/home")
      let Login = {username, password}

      let data1 = await axios.post("http://localhost:7020/Users", Login)
    }
    catch(err){
      console.log("err");
      
    }
  }


  return (
    <div>
      <div className="login">
        <form action="" onSubmit={handleSubmit}>
          <div id="items">
            <label htmlFor="username">Username : </label>
            <input type="text" name="username" id="" onChange={handleLogin}/>
          </div>

          <div id="items">
            <label htmlFor="password">Password : </label>
            <input type="password" name="password" id="" onChange={handleLogin}/>
          </div>

          <div id="itemsb">
            <button>Log In</button>
            <h2>Don't Have an Account? <span onClick={handleRegister}>Register</span></h2>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LogIn