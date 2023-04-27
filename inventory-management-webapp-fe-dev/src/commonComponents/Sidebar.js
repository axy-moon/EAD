import React, { useState } from "react";
import Navicon from "./Navicon"
import '../css/index.css';


const Sidebar = () => {
    


    return(
        <div className="sidebar">
            <Navicon name="Dashboard" />
            <Navicon name="Product" />
            <Navicon name="Product Sets" />
            <Navicon name="Orders" />
            <Navicon name="Customers" />
            <Navicon name="User Management" />
            

            {/* <div className="side-links">
            <span onClick={handleClick} class="material-symbols-outlined">team_dashboard</span>
                <p>Dashboard</p>
            </div>
            
            <div className="side-links">
            <span onClick={handleClick} class="material-symbols-outlined">team_dashboard</span>
                <p>Products</p>    
            </div>

            <div className="side-links">
            <span onClick={handleClick} class="material-symbols-outlined">team_dashboard</span>
                <p>Product Sets</p>
            </div>

            <div className="side-links">
            <span  onClick={handleClick} class="material-symbols-outlined">team_dashboard</span>
                <p>Orders</p>
            </div>

            <div className="side-links">
            <span onClick={handleClick} class="material-symbols-outlined">team_dashboard</span>
                <p>Customers</p>
            </div>

            <div className="side-links">
            <span onClick={handleClick} class="material-symbols-outlined">team_dashboard</span>
                <p>User Management</p>
            </div> */}

        </div>
    );
}

export default Sidebar;