import React from "react";
import 'primeicons/primeicons.css';
import '../css/index.css';
import logo from '../images/Ellipse.png';
import user from '../images/user.svg';
import { Avatar } from 'primereact/avatar';


const Header = (props) => {
    return(
        <div className="header">
            <div className="header-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="header-elements">
                <div className="user-section">
                    <Avatar icon="pi pi-user" style={{ backgroundColor: '#0DD3AD', color: '#fff' }} shape="circle" />
                    <span>Augxy</span>
                </div>
                <i class="fa-solid fa-right-from-bracket"></i>
            </div>
        </div>
    );
}

export default Header;