import React from "react";
import '../css/index.css';
import icon  from '../images/icon.svg';

const Sidebar = () => {
    return(
        <div className="sidebar">
            <div className="side-links">
            <span class="material-symbols-outlined">team_dashboard</span>
                <p>Dashboard</p>
            </div>
            
            <div className="side-links">
            <span class="material-symbols-outlined">team_dashboard</span>
                <p>Products</p>    
            </div>

            <div className="side-links">
            <span class="material-symbols-outlined">team_dashboard</span>
                <p>Product Sets</p>
            </div>

            <div className="side-links">
            <span class="material-symbols-outlined">team_dashboard</span>
                <p>Orders</p>
            </div>

            <div className="side-links">
            <span class="material-symbols-outlined">team_dashboard</span>
                <p>Customers</p>
            </div>

            <div className="side-links">
            <span class="material-symbols-outlined">team_dashboard</span>
                <p>User Management</p>
            </div>
        </div>
    );
}

export default Sidebar;