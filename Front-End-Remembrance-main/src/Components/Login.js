import React from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios"  

// Asad
function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const login = () => {
    axios
      .post(
        "http://localhost:5000/user/login",
        {
          username,
          password
        }
      )
      .then((res) => {
        if (res.status === 200) {
          sessionStorage.setItem("accessToken", res.data.accessToken);
          sessionStorage.setItem("username", res.data.username);
          navigate("/dashboard");
        }
        else if (res.status === 500) {
          setError("Error Signing in");
        }
      })
      .catch((err) => setError("Error Signing in"));
  };
  return (
    <div className='loginDiv'>
        <div className='leftSideBar'></div>
        <main>
            <h1 className='title' onClick={()=>{navigate("/")}}>Remembrance</h1>
            <div className='login-box'>
              <h1 className='box-title'>Login</h1>
              <form className='login-form'>
                <label>Email</label>
                <input type='text' placeholder="Enter Email" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <label>Password</label>
                <input type='password' placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input type="button" value="Submit" onClick={login}/>
              </form>
              <div className="error">{error}</div>
            </div>
        </main>
        <div className='rightSideBar'></div>
    </div>
  )
}

export default Login