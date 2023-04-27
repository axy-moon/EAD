import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from '../commonComponents/Button';
import Axios from "axios";

//routing
import {useParams} from 'react-router-dom'

//import constant from "./constant";

//css
import '../css/index.css';
import '../css/login.css';;

const SetPassword = () => {

    //routing
    const param = useParams();
    //console.log(param);
    const id=param.id;
    const token=param.token;

    //const [linkValidity, setLinkValidity] = useState('not-valid');
    const [isReadOnly, setIsReadOnly] = useState(false)

    function check(){
        if(linkValidity)
        { 
            //alert("hii ");
            setIsReadOnly(false);
        }
        else
        {
            alert(linkValidity);
            alert("The link has been expired. Try contacting the admin for further processing.");
            setIsReadOnly(true);

        }
    }
    var linkValidity = "";
    useEffect(() => {
        Axios({
            method:"post",
            url:"http://localhost:8000/verify",
            data:{
                id:id,
                token:token
            }
        }).then((response)=>{
            console.log(response);
            linkValidity=response.data;
            console.log('data is',linkValidity);
            check();
        })
        
        
    },[]);

    const [password1,setPassword1] = useState('');
    const [password2,setPassword2] = useState('');

    const[error,setError] = useState(false);
    const[error2,setError2] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password1 !== password2)
            setError(true);
        else if(!password1.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/)) 
            setError2(true); 
        else
        Axios({
            method:"patch",
            url:"http://localhost:8000/updateUser",
            data:{
                _id:id,
                Password:password1
            }
        }).then((response)=>{
            console.log(response);
            navigate("/Login");
        })
    }

  return(
    <div className="loginFormContainer">
            <div className="left">
                <h1 id="login-logo">logo</h1>
            </div>
            <div className="right">
                <form onSubmit={handleSubmit} className="CreateAccountForm" id="CreateAccountForm">
                <div className="input-group">
                    <h1>Create Account</h1>
                    <label htmlFor="newPasswd">Enter new password</label>
                    <input type="password" placeholder="minimum 8 characters" onInput={e=>setPassword1(e.target.value)}  disabled={isReadOnly} />
                    <label htmlFor="confirmPasswd">Confirm new password</label>
                   <input type="password" placeholder="minimum 8 characters" onInput={e=>setPassword2(e.target.value)} disabled={isReadOnly} />
                    <Button value='Confirm' id='CreateUserButton' />
                    {error&&(password1 !== password2)?
                    <p className="login-alert">Passwords does not match</p>:""}
                    {error2?
                    <p className="login-alert">Password must contain at least one alphabet in upper case, one number and one special character</p>:""}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SetPassword;