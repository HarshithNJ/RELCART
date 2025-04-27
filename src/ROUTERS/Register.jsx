import axios from 'axios'
import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Register = () => {

  let navigate = useNavigate()

  let handleLogin = ()=> {
    navigate("/login")
  }

  let [register, setRegister] = useState({
    username : "",
    email : "",
    mobile : "",
    password : "",
    confirm_password: ""
  })


  let {username, email, mobile, password} = register



  let handleRegister = (e) => {
    let {name, value} = e.target

    setRegister({...register, [name]:value})
  }




  let handleSubmit = async(e) => {
    e.preventDefault()

    try{
      if(register.password != register.confirm_password){
        alert("The Password doesn't match")
      }else{
        
        navigate("/login")

        let Registered_User = {username, email, mobile, password}

        let data = await axios.post("http://localhost:7020/Registered_User", Registered_User)
      }

    }
    catch(err){
      console.log("err");
      
    }
  }



  return (
    <div>
      <div className='signup'>
        <form onSubmit={handleSubmit}>
          <div id="item">
            <label htmlFor="username">Username : </label>
            <input type="text" name="username" id="" onChange={handleRegister} required/>
          </div>

          <div id="item">
            <label htmlFor="email">E-mail : </label>
            <input type="email" name="email" id="" onChange={handleRegister} required/>
          </div>

          <div id="item">
            <label htmlFor="mobile">Mobile Number : </label>
            <input type="number" name="mobile" id="" onChange={handleRegister} required/>
          </div>

          <div id="item">
            <label htmlFor="password">Password : </label>
            <input type="password" name="password" id="" onChange={handleRegister} required/>
          </div>

          <div id="item">
            <label htmlFor="confirm_password">Confirm Password : </label>
            <input type="password" name="confirm_password" id="" onChange={handleRegister}/>
          </div>

          <div id="itemb">
            <button>Register</button>
            <br />
            {/* <h1>Already Registered? <input type="button" value="LogIn Here" onClick={handleLogin} /></h1> Alternative Option */}
            <h2>Already Registered? <span onClick={handleLogin}>Login Here</span></h2>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register