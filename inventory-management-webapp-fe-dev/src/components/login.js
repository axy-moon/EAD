import React, { useState } from "react";
import Button from '../commonComponents/Button';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import '../css/index.css';
import '../css/login.css';

const Login = (props) => {

    const [state,setState] = useState({
        email:"",
        password:"",
    });

    const [error,setError] = useState(false);
 
    const handleChange = (e) => {
        const{id, value} = e.target;
        setState((prevState) => ({
            ...prevState,
            [id]: value,
          }));
        };

    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(state.email === "" || state.password === "")
            setError(true);
        else {
            setError(false);
            Axios({
                method:"post",
                url:"http://localhost:8000/login",
                data:{
                    username:state.email,
                    Password:state.password
                }
            }).then((response)=>{
                const data=response.data.data;
                if(data=="false"){
                    alert("Kindly check your credentials")
                }
                else{
                    console.log('inside login',response.data.data)
                    const token=response.data.data;
                    localStorage.setItem('token',token);
                    navigate("/userManagement");
                }
            })        
        }
    }

    return(
        <div className="loginFormContainer">
            <div className="left">
                <h1 id="login-logo">logo</h1>
            </div>
            <div className="right">              
                <form action="/loginSuccess" className="CreateAccountForm" onSubmit={handleSubmit}>
                <div className="input-group">
                    <h1>Login</h1>
                    <label htmlFor="newPasswd">Email*</label>
                    <input  type="email" id="email" placeholder="Enter your email" onChange={handleChange} value={state.email}  />
                    <label htmlFor="newPasswd">Password*</label>
                    <input type="password" id="password" placeholder="Minimum 8 characters" value={state.password} onChange={handleChange} />
                    <br/>
                    <div className="loginEl">
                        <div className="check">
                        <input type="checkbox"/>
                        <label>Remember Me</label>
                        </div>
                        <Link to="/SendEmail" className="loginEl-link">Forgot Password</Link>
                    </div>
                    <Button value='Login' id='CreateUserButton' />
                    {error?
                    <p className="login-alert">Please Enter email and password</p>:""}
                    </div>
                </form>
            </div>
        </div>
    );
    }

export default Login;