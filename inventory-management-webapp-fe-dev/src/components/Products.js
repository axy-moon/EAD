import React from "react";

import Header from "../commonComponents/Header"
import Sidebar from "../commonComponents/Sidebar"


import "../css/index.css"



const Products = () => {
    return (
        <>
        <Header/>
        <div style={{'display' : 'flex'}}>
            <Sidebar/>
            <div className="container">
                <h1>Products Page</h1>
            </div>
        </div>
        </>
    );
}

export default Products;