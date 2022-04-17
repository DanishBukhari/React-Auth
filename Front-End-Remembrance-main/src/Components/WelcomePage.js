import React from 'react'
import { useNavigate } from "react-router-dom"


function WelcomePage() {
  let navigate = useNavigate();


  return (
    <div className='welcomePage'>
        <h2 className='quote'>
        "If you want to develop real friendships, if you want to help others at the same time as you help yourself, keep this principle in mind: Become genuinely interested in other people." – Dale Carnegie.
        </h2>
        <div className='login'>
            <h1 className='accountInfo' onClick={()=>{navigate("/signup")}}>Sign Up</h1>
            <h1 className='accountInfo' onClick={()=>{navigate("/dashboard")}}>Guest</h1>
            <h1 className='accountInfo'onClick={()=>{navigate("/login")}}>Login</h1>
        </div>

    </div>
  )
}

export default WelcomePage


