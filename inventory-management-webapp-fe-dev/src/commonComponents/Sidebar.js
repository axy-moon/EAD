import React, { useState } from "react";
import Navicon from "./Navicon"
import { NavLink,Link } from "react-router-dom";

import '../css/index.css';


const Sidebar = () => {


    return(
        <div className="sidebar">
            <Navicon name="Dashboard" />
            <NavLink to="/Product" activeClassName="active"><Navicon name="Product" /></NavLink>
            <Navicon name="Product Sets" />
            <NavLink to="/Order" activeClassName="active"><Navicon name="Order" /></NavLink>
            <Navicon name="Customers" />
            <NavLink to="/usermanagement" activeClassName="active"><Navicon  name="User Management" /></NavLink>
        </div>
    );
}

export default Sidebar;