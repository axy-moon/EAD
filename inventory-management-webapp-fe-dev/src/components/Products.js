import React from "react";

import Header from "../commonComponents/Header"
import Sidebar from "../commonComponents/Sidebar"


import "../css/index.css"

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';



const Products = () => {


    return (
        <>
        <Header/>
        <div style={{'display' : 'flex'}}>
            <Sidebar/>
            <div className="container">
                <div className="grid-layout">
                <div className="ps-grid-top">
                    <div className="ps-grid-left">
                        <h1>Total Products</h1>
                        <span>428</span>
                    </div>
                    <div className="ps-grid-center">
                        <h3>Manage Products</h3>
                        <div className="ps-buttons">
                        <div>
                            <button><span class="material-symbols-outlined">library_add</span></button>
                            <p>Add Products</p>
                            <button><span class="material-symbols-outlined">edit_note</span></button>
                            <p>Edit Products</p>
                            </div>
                        <div>

                        <button><span class="material-symbols-outlined">table_view</span></button>
                        <p>View Products</p>
                        
                        <button><span class="material-symbols-outlined">delete_sweep</span></button>
                        <p>Delete Products</p>
                        </div>
                        </div>
                    </div>
                    <div className="ps-grid-right">
                    </div>                    
                </div>
                <div className="ps-grid-bottom">

                </div>
            </div>
            </div>

        </div>
        </>
    );
}

export default Products;