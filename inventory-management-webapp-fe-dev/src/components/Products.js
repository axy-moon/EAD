import React from "react";
import {useReducer, useEffect} from 'react';
import Header from "../commonComponents/Header"
import Sidebar from "../commonComponents/Sidebar"
import productfile from "./products.json"

import "../css/index.css"

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "primereact/resources/themes/lara-light-indigo/theme.css"; 

import DoughnutChart from "./Chart";

const init = initialState => initialState;

const reducer = (state, action) => {
  switch (action.type) {
    case "dataLoaded":
      return { ...state, results: action.payload, loading: false };
    default:
      throw new Error();
  }
};

const Products = () => {

         const initialState = {
                results: [],
                loading: true
            };
            const [state, dispatch] = useReducer(reducer, initialState, init);
            const { results, loading } = state;

            useEffect(() => {
                if (loading) {
                dispatch({ type: "dataLoaded", payload: productfile.data });
                }
            }, [loading]);


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
                            <button id="b1"><span class="material-symbols-outlined">library_add</span></button>
                            <p>Add Products</p>
                            <button id="b2"><span class="material-symbols-outlined">edit_note</span></button>
                            <p>Edit Products</p>
                            </div>
                        <div>

                        <button id="b3"><span class="material-symbols-outlined">table_view</span></button>
                        <p>View Products</p>
                        
                        <button id="b4"><span class="material-symbols-outlined">delete_sweep</span></button>
                        <p>Delete Products</p>
                        </div>
                        </div>
                    </div>
                    <div className="ps-grid-right">
                        <h3>Product Categories</h3>
                        <DoughnutChart/>
                    </div>                    
                </div>
                <div className="ps-grid-bottom">
                <div className="ps-grid-bleft">
                <h3>Recently Added Products</h3>
                <div className="ps-dt-table">
                <DataTable value={results} scrollable scrollHeight="240px" size="small" tableStyle={{ width: '40rem' }}>
                    <Column field="code" header="CODE"></Column>
                    <Column field="name" header="NAME"></Column>
                    <Column field="category" header="CATEGORY"></Column>
                    <Column field="quantity" header="QUANTITY"></Column>
                </DataTable>
                </div>
                </div>
                <div className="ps-grid-bright">
                    <h2>This Month</h2>
                    <div>
                    <span>90</span>
                    <p>Products Added</p>
                    </div>

                    <div>
                    <span>231</span>
                    <p>Products Saled</p>
                    </div>

                    <div>
                        <span>21</span>
                        <p>Products Returned</p>
                    </div>
                    <div className="order-btn">
                        <button>See Orders</button>
                    </div>
                </div>
                </div>
            </div>
            </div>

        </div>
        </>
    );
}

export default Products;