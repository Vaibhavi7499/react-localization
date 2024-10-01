import { useState } from "react";
import "./Login.scss";
import { LoginUsers } from "../../constant/Loginusers";
import { useNavigate } from "react-router-dom";
const Login = () => {
 let navigate =  useNavigate()
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  let loginUser = () => {
    if(login.username === LoginUsers.username && login.password === LoginUsers.password) {
        localStorage.setItem("isLogin",true)
        alert("Login Successfully")
        navigate("/emp")
        
    } else {
        alert("Invalid Credentails")
        setLogin({
            username : "",
            password : ""
        })
    }
  }
  return (
    <>
      <div className="login-container">
        <div>
          <h3>Login</h3>
          <hr />
        </div>
        <div className="username-container">
          <label htmlFor="">Username:</label>
          <input
            type="text"
            placeholder="username"
            value={login.username}
            onChange={(e) => setLogin({ ...login, username: e.target.value })}
          />
        </div>

        <div className="password-container">
          <label htmlFor="">Password:</label>
          <input type="text" placeholder="password"
          value={login.password}
          onChange={(e) => setLogin({...login, password : e.target.value})}
          />
        </div>

        <div>
          <button onClick={loginUser}>Login</button>
        </div>
      </div>
    </>
  );
};

export default Login;
