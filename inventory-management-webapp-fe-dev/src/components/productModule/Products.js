import React from "react";

import Header from "../../commonComponents/Header"
import Sidebar from "../../commonComponents/Sidebar"



const Products = () => {
    return (
        <>
        <Header/>
        <div style={{'display' : 'flex'}}>
            <Sidebar/>
            <div className="container">
                <div>
                    <h1>Manage Your Products</h1>
                    <ul>
                        <li><a href="addProduct">Add New Product</a></li>
                        <li>Edit</li>
                        <li>View</li>
                        <li>Delete</li>
                        <li>Edit</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}

export default Products;