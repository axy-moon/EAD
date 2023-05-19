import React from 'react';
import '../../css/product.css';
import {Button} from 'primereact/button';
import {useNavigate} from "react-router-dom";

import '../../css/product.css'


function Order() {
  const navigate = useNavigate();
  const handleSalesButton = (buttonName) => {
    navigate('/SalesOrder');
  };

  const handleRentButton = (buttonName) => {
    navigate('/RentOrder');
  }

  return (
    <div className="orderCenter">
        <div className="addprod">
          <h1>MANAGE ORDERS</h1>
          <div className='ap-grid'>
            <div className="sale-btns">
                <Button label="Sales Order" severity="info" raised icon="pi pi-link" onClick={handleSalesButton}/>
                <br/>
                <br/>
                <Button label="Rent Order" severity="warning" raised icon="pi pi-check-square" onClick={handleRentButton}/>
            </div>
            </div>
        </div>
    </div>
  );
}

export default Order;