import React from 'react';
import '../../css/product.css';
import {Button} from 'primereact/button';
import {useNavigate} from "react-router-dom";


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
        <h2>ORDER MANAGEMENT</h2>
        <br/>
        <div className="ap-grid">
            <div className="fbtns">
                <Button label="Sales Order" severity="success" raised icon="pi pi-check" onClick={handleSalesButton}/>
                <br/>
                <br/>
                <Button label="Rent Order" severity="success" raised icon="pi pi-check" onClick={handleRentButton}/>
            </div>
        </div>
    </div>
  );
}

export default Order;