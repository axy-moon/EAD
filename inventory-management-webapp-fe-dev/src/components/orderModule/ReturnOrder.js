import React,{useState} from 'react'
import '../productModule/addProduct.css'

const ReturnOrder = () => {


  // form-value

  const [orderDate, setOrderDate] = useState("")
  const [orderNo, setOrderNo] = useState("")
  const [depositAmount, setDepositAmount] = useState("")
  const [receivedDate, setReceivedDate] = useState("")
  const [refundAmount, setRefundAmount] = useState("")
  const [reason, setReason] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(orderDate,orderNo,depositAmount,receivedDate,refundAmount,reason)

    alert("Return order successfully completed")
  }


    return(
        <>
            <div className="container-addProduct">
        <form> 
        <div className="right-addProduct">
          <h2>Return Order</h2>


          <div className="row">
            <div className="col25">
              <label htmlFor="orderDate">Order Date</label>
            </div>
            <div className="col75">
              <input type="text" id="orderDate" name="orderDate" onInput={(e) => setOrderDate(e.target.value)} />
            </div>
          </div>

         <div className="row">
            <div className="col25">
              <label htmlFor="orderNumber">Order Number</label>
            </div>
            <div className="col75">
              <input type="text" id="orderNumber" name="orderNumber" onInput={(e) => setOrderNo(e.target.value)} />
            </div>
          </div>

         <div className="row">
            <div className="col25">
              <label htmlFor="depositAmount">Deposit Amount</label>
            </div>
            <div className="col75">
              <input type="text" id="depositAmount" name="depositAmount" onInput={(e) => setDepositAmount(e.target.value)} />
            </div>
          </div>

          <div className="row">
            <div className="col25">
              <label htmlFor="receivedDate">Received Date</label>
            </div>
            <div className="col75">
              <input type="text" id="receivedDate" name="receivedDate"  onInput={(e) => setReceivedDate(e.target.value)}  />
            </div>
          </div>

          <div className="row">
            <div className="col25">
              <label htmlFor="refundAmount">Refund Amount</label>
            </div>
            <div className="col75">
              <input type="text" id="refundAmount" name="refundAmount" onInput={(e) => setRefundAmount(e.target.value)}/>
            </div>
          </div>

          <div className="row">
            <div className="col25">
              <label htmlFor="reason">Reason</label>
            </div>
            <div className="col75">
              <input type="text" id="reason" name="reason" onInput={(e) => setReason(e.target.value)}/>
            </div>
          </div>
          
            <div className="row">
              <div className="col50">
               <input type="reset" className="addProduct-btns" name="cancel" value="CANCEL" />
            </div>
            <div className="col50">
              <button className="addProduct-btns" onClick={handleSubmit}>REFUND</button>
            </div>
            </div>
        </div> 
 

        </form>
        </div>
        </>
    );
}

export default ReturnOrder