import React from "react";
import 'primeicons/primeicons.css';
import '../css/index.css';
import logo from '../images/Ellipse.png';
import user from '../images/user.svg';

const Header = (props) => {
    return(
        <div className="header">
            <div className="header-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="header-elements">
                <div className="icons">
                    <i className="pi pi-search search"></i>
                    <i className="pi pi-bell"></i>
                </div>
                <div className="user-section">
                    <img src={user} className="avatar" alt="logo"/>
                    <span>{props.name}</span>
                    <i className="pi pi-sort-down"></i>
                </div>
            </div>
        </div>
    );
}

export default Header;