import React,{useState} from 'react'
import '../productModule/addProduct.css'

import Header  from '../../commonComponents/Header'
import Sidebar from '../../commonComponents/Sidebar'

const SalesOrder = () => {


  // form-value

  const [itemCategory, setItemCategory] = useState("")
  const [itemType, setItemType] = useState("")
  const [itemId, setItemId] = useState("")
  const [availableQuantity, setAvailableQuantity] = useState("")
  const [stock, setStock] = useState("")
  const [customerName, setCustomerName] = useState("")
  const [customerAddress, setCustomerAddress] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")



  const handleUploadImage = (e) =>
  {
    e.preventDefault()
    const imgEle = document.getElementById('output')
    imgEle.src = e.target.value;
    console.log(e.target.value)
    console.log(imgEle)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(itemCategory,itemType,itemId,availableQuantity,stock,customerName,customerAddress,phoneNumber)

    alert("Your order has been placed Successfully")
  }


    return(
        <>
            <div className="container-addProduct">
        <form> 
        <div className="right-addProduct">
          <h2>Sales Order</h2>
          <br></br>
          <h3>Product Details</h3>
          
          <div className="row">
            <div className="col25">
              <label htmlFor="itemCategory">Item Category</label>
            </div>
            <div className="col75">
              <select id="itemCategory" name="itemCategory" onInput={(e)=>setItemCategory(e.target.value)}>
                <option value="itemCat1">itemCat1</option>
                <option value="itemCat2">itemCat2</option>
                <option value="itemCat3">itemCat3</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col25">
              <label htmlFor="itemType">Item Type</label>
            </div>
            <div className="col75">
              <select id="itemType" name="itemType" onInput={(e)=>setItemType(e.target.value)}>
                <option value="itemType1">itemType1</option>
                <option value="itemType2">itemType2</option>
                <option value="itemType3">itemType3</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col25">
              <label htmlFor="itemId">Item Id</label>
            </div>
            <div className="col75">
              <select id="itemId" name="itemId" onInput={(e)=>setItemId(e.target.value)}>
                <option value="itemId1">itemId1</option>
                <option value="itemId2">itemId2</option>
                <option value="itemId2">itemId3</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col25">
              <label htmlFor="aQuantity">Available Quantity</label>
            </div>
            <div className="col75">
              <input type="text" id="aQuantity" name="aQuantity" disabled />
            </div>
          </div>

          <div className="row">
            <div className="col25">
              <label htmlFor="stock">Stock</label>
            </div>
            <div className="col75">
              <input type="text" id="stock" name="stock" onInput={(e)=>setStock(e.target.value)}/>
            </div>
          </div>

          {/* ------------------Customer Details---------------------------- */}

          <h3>Customer Details</h3>
          <div className="row">
            <div className="col25">
              <label htmlFor="customerName">Customer Name</label>
            </div>
            <div className="col75">
              <input type="text" id="customerName" name="customerName" onInput={(e)=>setCustomerName(e.target.value)}/>
            </div>
          </div>

          <div className="row">
            <div className="col25">
              <label htmlFor="customerAddress">Customer Address</label>
            </div>
            <div className="col75">
              <input type="text" id="customerAddress" name="customerAddress" onInput={(e)=>setCustomerAddress(e.target.value)}/>
            </div>
          </div>

          <div className="row">
            <div className="col25">
              <label htmlFor="phoneNumber">Phone Number</label>
            </div>
            <div className="col75">
              <input type="text" id="phoneNumber" name="phoneNumber" onInput={(e)=>setPhoneNumber(e.target.value)}/>
            </div>
          </div>
          
            <div className="row">
              <div className="col50">
               <input type="button" className="addProduct-btns" name="cancel" value="CANCEL" />
            </div>
            <div className="col50">
              <button className="addProduct-btns" onClick={handleSubmit}>ORDER</button>
            </div>
            </div>
        </div> 
        
        <div className="image-upload">
                <p><input type="file"  accept="image/*" name="image" id="file" onChange={handleUploadImage}/></p>
                <p><label htmlFor="file">Upload Image</label></p>
                <p><img id="output" width="200" style={{background:"blue"}}/></p>
          </div>  

        </form>
        </div>
        </>
    );
}

export default SalesOrder