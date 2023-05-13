import React from "react";

const Order = () => 
{
    return (
        <>
        <h1>Manage Your Orders</h1>
          <br />
          <br />
             <ul>
                 <a href="./SalesOrder"><li>Sales Order</li></a>
                 <a href="RentOrder"><li>Rent Order</li></a>
                 <a href="ReturnOrder"><li>Return Order</li></a>
             </ul>
          <br />
        </>
    )
}

export default Order