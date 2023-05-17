import React,{useState, useEffect} from 'react'
import '../productModule/addProduct.css'
import Axios from 'axios'


const RentOrder = () => {

  const [itemCategory, setItemCategory] = useState("")
  const [itemType, setItemType] = useState("")
  const [itemId, setItemId] = useState("")
  const [availableQuantity, setAvailableQuantity] = useState("")
  const [requiredQuantity, setRequiredQuantity] = useState("");
  const [fromDate, setFromDate] = useState("")
  const [toDate, setToDate] = useState("")
  const [customerName, setCustomerName] = useState("")
  const [customerAddress, setCustomerAddress] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [rentPerDay, setRentPerDay] = useState("")
  const [advanceAmount, setAdvanceAmount] = useState("")
  const [categoryList,setCategoryList]=useState([])
  const [categoryListHasValue,setCategoryListHasValue] = useState(false)
  const [typeList,setTypeList]=useState([])
  const [typeListHasValue,setTypeListHasValue] = useState(false)
  const [idList,setIdList]=useState([])
  const [idListHasValue,setIdListHasValue] = useState(false)
  const [buttondisabled,setbuttondisabled]=useState(true)

  useEffect(() => {
    Axios.post("http://localhost:8000/uniqueCategory").then((res)=>{
      var arr=res.data.category;
      console.log('length',arr.length)
      if(arr.length){
        console.log(res.data.category);
        categoryList.push(res.data.category);
        setCategoryListHasValue(true);
        handleCategory();
      }
      else{
        categoryList.length=0;
        setCategoryListHasValue(false);
      }
    })
}, [itemCategory]);

const handleCategory = ()=>{
  Axios.post("http://localhost:8000/getUniqueItemtype",{
    itemcategory: itemCategory
  }).then((res)=>{
      var arr=res.data.item_type;
      if(arr.length){
        console.log(res.data.item_type);
        typeList.length=0;
        typeList.push(res.data.item_type);
        console.log("Type List :"+typeList);
        setTypeListHasValue(true);
      }
      else{
        typeList.length=0;
        setTypeListHasValue(false);
      }
  })
}

const getData=(e)=>{
  Axios.post('http://localhost:8000/getQuantity',{
    item_category:itemCategory,
    item_type:itemType,
    product_id:itemId
  }).then(res=>{
     setAvailableQuantity(res.data.product[0].quantity)
     alert("Quantity",res.data.product.quantity)
     if(res.data.product[0].quantity!=0){
          setbuttondisabled(true)
          alert(buttondisabled)
     }
     else{
      setbuttondisabled(false)
      alert(buttondisabled)
     }
  })
}


  // const handleUploadImage = (e) =>
  // {
  //   e.preventDefault()
  //   const imgEle = document.getElementById('output')
  //   imgEle.src = e.target.value;
  //   console.log(e.target.value)
  //   console.log(imgEle)
  // }

  const handleSubmit = (e) => {
    
    console.log(itemCategory,itemType,itemId,availableQuantity,fromDate,toDate,customerName,customerAddress,phoneNumber)

    alert("Availability,Rent Per day: ",availableQuantity,rentPerDay)
  }

    return(
        <>
        <div className="container-addProduct">
        <form> 
        <div className="right-addProduct">
          <h2>Rent Order</h2>
          <br></br>
          <h3>Product Details</h3>
          
          <div className="row">
            <div className="col25">
              <label htmlFor="itemCategory">Item Category</label>
            </div>
            {/* <div className="col75">
              <select id="itemCategory" name="itemCategory" onInput={(e)=>setItemCategory(e.target.value)}>
                <option value="itemCat1">itemCat1</option>
                <option value="itemCat2">itemCat2</option>
                <option value="itemCat3">itemCat3</option>
              </select>
            </div> */}
            <div className="col75">
              <select id="itemCategory" name="itemCategory"  onChange={(e)=>setItemCategory(e.target.value)}>
                <option value="default">---Select---</option>
                {categoryListHasValue && categoryList[0].map((category) => (
                 <option key={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col25">
              <label htmlFor="itemType">Item Type</label>
            </div>
            {/* <div className="col75">
              <select id="itemType" name="itemType" onInput={(e)=>setItemType(e.target.value)}>
                <option value="itemType1">itemType1</option>
                <option value="itemType2">itemType2</option>
                <option value="itemType3">itemType3</option>
              </select>
            </div> */}
            <div className="col75">
              <select id="itemType" name="itemType"  onInput={(e)=>setItemType(e.target.value)}>
                <option value="default">---Select---</option>
                {typeListHasValue && typeList[0].map((item_type) => (
                 <option key={item_type}>{item_type}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col25">
              <label htmlFor="itemId">Item Id</label>
            </div>
            <div className="col75">
              <select id="itemId" name="itemId" onInput={(e)=>setItemId(e.target.value)} onChange={getData}>
                <option value="itemCat1">---Select---</option>
                {idListHasValue && idList[0].map((product) => (
                 <option key={product.product_id}>{product.product_id}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col25">
              <label htmlFor="aQuantity">Available Quantity</label>
            </div>
            <div className="col75">
              <input type="text" id="aQuantity" name="aQuantity" value={availableQuantity} disabled />
            </div>
          </div>

          <div className="row">
            <div className="col25">
              <label htmlFor="aQuantity">Required Quantity</label>
            </div>
            <div className="col75">
              <input type="text" id="rQuantity" name="rQuantity" onInput={(e)=>setRequiredQuantity(e.target.value)} />
            </div>
          </div>

          <div className="row">
            <div className="col25">
              <label htmlFor="date">From Date</label>
            </div>
            <div className="col75">
              <input type="text" id="date" name="date" onInput={(e)=>setFromDate(e.target.value)}/>
            </div>
          </div>

          <div className="row">
            <div className="col25">
              <label htmlFor="date">To Date</label>
            </div>
            <div className="col75">
              <input type="text" id="date" name="date" onInput={(e)=>setToDate(e.target.value)}/>
            </div>
          </div>

          <div className="row">
            <div className="col25">
              <label htmlFor="rentPerDay">Rent per Day</label>
            </div>
            <div className="col75">
              <input type="text" id="rentPerDay" name="rentPerDay" onInput={(e)=>setRentPerDay(e.target.value)} />
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

          {/* ------------------Payment Details---------------------------- */}

          <h3>Payment Details</h3>
          <div className="row">
            <div className="col25">
              <label htmlFor="advanceAmount">Initial Advance Deposit Amount</label>
            </div>
            <div className="col75">
              <input type="text" id="advanceAmount" name="advanceAmount" onInput={(e)=>setAdvanceAmount(e.target.value)}/>
            </div>
          </div>
          
            <div className="row">
              <div className="col50">
               <input type="reset" className="addProduct-btns" name="cancel" value="CANCEL" />
            </div>
            <div className="col50">
              <button className="addProduct-btns" onClick={handleSubmit}>DONE</button>
            </div>
            </div>
        </div> 
        
        {/* <div className="image-upload">
                <p><input type="file"  accept="image/*" name="image" id="file" onChange={handleUploadImage}/></p>
                <p><label htmlFor="file">Upload Image</label></p>
                <p><img id="output" width="200" style={{background:"blue"}}/></p>
        </div>   */}

        </form>
        </div>
        </>
    );
}

export default RentOrder