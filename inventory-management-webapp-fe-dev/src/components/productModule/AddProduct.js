import React,{useState, useRef, useEffect} from 'react'
import './addProduct.css'
import Axios from 'axios';
import { Toast } from 'primereact/toast'

const AddProduct = () => {

  const toast = useRef(null);
  const [categoryList,setCategoryList]=useState([])
  const [categoryListHasValue,setCategoryListHasValue] = useState(false)
  const [typeList,setTypeList]=useState([])
  const [typeListHasValue,setTypeListHasValue] = useState(false)


  useEffect(() => {
      Axios.post("http://localhost:8000/uniqueCategory").then((res)=>{
        var arr=res.data.category;
        console.log('length',arr.length)
        if(arr.length){
          console.log(res.data.category);
          categoryList.push(res.data.category);
          setCategoryListHasValue(true);
        }
        else{
          categoryList.length=0;
          setCategoryListHasValue(false);
        }
      })
  }, []);

  const showSuccess = () => {
      toast.current.show({severity:'success', summary: 'Success', detail:'Product Details Inserted Successfully', life: 2000});
  }

  // rent or sales options (checkbox)

  const [rentCheckbox,setRentCheckbox] = useState(false);
  const [salesCheckbox,setSalesCheckbox] = useState(false);
  const [ItemCategoryOther,setItemCategoryOther] = useState(false);
  const [ItemTypeOther,setItemTypeOther] = useState(false);

  // form-value

  const [itemCategory, setItemCategory] = useState("")
  const [itemType, setItemType] = useState("")
  const [purchaseCost, setPurchaseCost] = useState("")
  const [quantity, setQuantity] = useState("")
  const [totalCost, setTotalCost] = useState("")
  const [notes, setNotes] = useState("")
  const [depositAmount, setDepositAmount] = useState("")
  const [salesPrice, setSalesPrice] = useState("")
  const [fineamount, setFineAmount] = useState("");
  const [productid, setId] = useState("");

  const handleUploadImage = (e) =>
  {
    e.preventDefault()
    const imgEle = document.getElementById('output')
    imgEle.src = e.target.value;
    console.log(e.target.value)
    console.log(imgEle)
  }

  const handleSalesType = (e) =>
  {
    e.preventDefault()
    if(e.target.id === "rent")
    {
      setRentCheckbox(e.target.checked)
      setDepositAmount(e.target.value)
    }
    else if(e.target.id === "sales") {
      setSalesCheckbox(e.target.checked)
      setSalesPrice(e.target.value)
    }
  }

  const handleItemCategory = (e) =>{
    e.preventDefault();
    setItemCategory(e.target.value);
    if(e.target.value === "others"){
      setItemCategoryOther(true);
    }
    else{
      setItemCategoryOther(false);
    }

    Axios.post("http://localhost:8000/getUniqueItemtype",{
      itemcategory: itemCategory
    }).then((res)=>{
        var arr=res.data.item_type;
        if(arr.length){
          console.log(res.data.item_type);
          typeList.push(res.data.item_type);
          setTypeListHasValue(true);
        }
        else{
          typeList.length=0;
          setTypeListHasValue(false);
        }
      })
  }

  const handleItemType = (e) =>{
    e.preventDefault();
    if(e.target.value === "others"){
      setItemTypeOther(true);
    }
    else{
      setItemType(e.target.value);
      setItemTypeOther(false);
    }
  }

  const handleTotalCost1 = (e) => {
    setPurchaseCost(e.target.value)
    if(purchaseCost != "" && quantity != ""){
      setTotalCost(purchaseCost * quantity);
    }
    if(purchaseCost == "" || quantity == ""){
      setTotalCost("");
    }
  }

  const handleTotalCost2 = (e) => {
    setQuantity(e.target.value)
    if(purchaseCost != "" && quantity != ""){
      setTotalCost(purchaseCost * quantity);
    }
    if(purchaseCost == "" || quantity == ""){
      setTotalCost("");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(itemCategory,itemType,purchaseCost,quantity,totalCost,notes,depositAmount,salesPrice);
    
    if(rentCheckbox == true && salesCheckbox == true){
      Axios({
        method:"post",
        url:"http://localhost:8000/addProduct",
        data:{
          item_category: itemCategory,
          item_type: itemType,
          product_id:productid,
          purchase_cost: purchaseCost,
          notes: notes,
          quantity: quantity,
          rent: rentCheckbox,
          sales: salesCheckbox,
          deposit_amt: depositAmount,
          sales_amt: salesPrice,
          fine_amt: fineamount
        }
      }).then((response)=>{
        showSuccess();
      })
    }
    else if(rentCheckbox == true && salesCheckbox == false){
      Axios({
        method:"post",
        url:"http://localhost:8000/addProduct",
        data:{
          item_category: itemCategory,
          item_type: itemType,
          product_id:productid,
          purchase_cost: purchaseCost,
          notes: notes,
          quantity: quantity,
          rent: rentCheckbox,
          sales: salesCheckbox,
          deposit_amt: depositAmount,
          fine_amt: fineamount
        }
      }).then((response)=>{
        showSuccess();
      })
    }
    else if(rentCheckbox == false && salesCheckbox == true){
      Axios({
        method:"post",
        url:"http://localhost:8000/addProduct",
        data:{
          item_category: itemCategory,
          item_type: itemType,
          product_id:productid,
          purchase_cost: purchaseCost,
          notes: notes,
          quantity: quantity,
          rent: rentCheckbox,
          sales: salesCheckbox,
          sales_amt: salesPrice,
          fine_amt: fineamount
        }
      }).then((response)=>{
        showSuccess();
      })
    }
  }

  return (
    <>
      <div className="container-addProduct">
        <Toast ref={toast}/>
        <form>
        <div className="right-addProduct">
          <h2>Add Item</h2>
        
          <div className="row">
            <div className="col25">
              <label htmlFor="itemCategory">Item Category</label>
            </div>
            {/* <div className="col75">
              <select id="itemCategory" name="itemCategory" onInput={(e)=>setItemCategory(e.target.value)}>
                <option value="default">--Select--</option>
                <option value="Stationary">Stationary</option>
                <option value="Toys">Toys</option>
                <option value="Gift Items">Gift Items</option>
              </select>
            </div> */}
            <div className="col75">
              <select id="itemCategory" name="itemCategory"  onInput={handleItemCategory}>
                <option value="default">---Select---</option>
                {categoryListHasValue && categoryList[0].map((category) => (
                 <option key={category}>{category}</option>
                ))}
                <option value="others">Other</option>
              </select>
            </div>
          </div>
          
          { ItemCategoryOther && 
          <div className="row">
              <div className="col25">
               <label htmlFor="newitemcategory">New Item Category</label>
              </div>
              <div className="col75">
                <input type="text" id="newitemcategoryname" name="newitemcategoryname" onInput={(e)=>setItemCategory(e.target.value)}/>
              </div>
          </div>
          }
          

          <div className="row">
            <div className="col25">
              <label htmlFor="itemType">Item Type</label>
            </div>
            {/* <div className="col75">
              <select id="itemType" name="itemType" onInput={(e)=>setItemType(e.target.value)}>
                <option value="default">--Select--</option>
                <option value="Pen">Pen</option>
                <option value="Paper">Paper</option>
                <option value="Scale">Scale</option>
                <option value="Colour Pens">Colour Pens</option>
                <option value="Remote Control Toys">Remote Control Toys</option>
                <option value="Soft Toys">Soft Toys</option>
                <option value="Plastic Toys">Plastic Toys</option>
                <option value="Photo Frames">Photo Frames</option>
                <option value="Glass Products">Glass Products</option>
                <option value="Coffee Mugs">Coffee Mugs</option>
              </select>
            </div> */}
            <div className="col75">
              <select id="itemType" name="itemType"  onChange={handleItemType}>
                <option value="default">---Select---</option>
                {typeListHasValue && typeList[0].map((item_type) => (
                 <option key={item_type}>{item_type}</option>
                ))}
                <option value="others">Other</option>
              </select>
            </div>
          </div>

          { ItemTypeOther && 
          <div className="row">
              <div className="col25">
               <label htmlFor="newitemtype">New Item Type</label>
              </div>
              <div className="col75">
                <input type="text" id="newitemtypename" name="newitemtypename" onInput={(e)=>setItemType(e.target.value)}/>
              </div>
          </div>
          }

          <div className="row">
            <div className="col25">
              <label htmlFor="purchaseCost">Product Id</label>
            </div>
            <div className="col75">
              <input type="text" id="purchaseCost" name="productid" onInput={(e)=>setId(e.target.value)} />
            </div>
          </div>

          <div className="row">
            <div className="col25">
              <label htmlFor="purchaseCost">Purchase Cost</label>
            </div>
            <div className="col75">
              <input type="text" id="purchaseCost" name="purchaseCost" onInput={handleTotalCost1}/>
            </div>
          </div>

          <div className="row">
            <div className="col25">
              <label htmlFor="quantity">Quantity</label>
            </div>
            <div className="col75">
              <input type="text" id="quantity" name="quantity" onInput={handleTotalCost2}/>
            </div>
          </div>

          <div className="row">
            <div className="col25">
              <label htmlFor="totalCost">Total Cost</label>
            </div>
            <div className="col75">
              <input type="text" id="totalCost" name="totalCost" disabled value={totalCost} />
            </div>
          </div>
          
          <div className="row">
            <div className="col25">
              <label htmlFor="notes">Notes</label>
            </div>
            <div className="col75">
              <textarea type="text" id="notes" name="notes" onInput={(e)=>setNotes(e.target.value)}/>
            </div>
          </div>

          <div className="row">
            <div className="col25">
              <label htmlFor="notes">Fine Amount</label>
            </div>
            <div className="col75">
              <textarea type="text" id="famount" name="famount" onInput={(e)=>setFineAmount(e.target.value)}/>
            </div>
          </div>

          <div className="row">
            <div className="col25">
              <label htmlFor="salesType">Sales Type</label>
            </div>
            <div className="col75 salesType">
              <div className="stype">
                <input type="checkbox" id="rent" name="rent" onInput={handleSalesType} />
              <label htmlFor="rent">Rent</label>
              </div>
              <div className="stype">
                <input type="checkbox" id="sales" name="sales" onInput={handleSalesType} />
              <label htmlFor="sales">Sales</label>
              </div>
            </div>
          </div>
          

        { rentCheckbox && 
          <div className="row">
              <div className="col25">
               <label htmlFor="depositAmount">Deposite Amount</label>

            </div>
            <div className="col75">
              <input type="text" id="depositAmount" name="depositAmount" onInput={(e)=>setDepositAmount(e.target.value)}/>
            </div>
            </div>
        }

        
        {salesCheckbox && 
            <div className="row">
              <div className="col25">
               <label htmlFor="salesPrice">Sales Price</label>

            </div>
            <div className="col75">
              <input type="text" id="salesPrice" name="salesPrice"  onInput={(e)=>setSalesPrice(e.target.value)}/>
            </div>
            </div>
        }
            <div className="row">
              <div className="col50">
               <input type="button" className="addProduct-btns" name="cancel" value="CANCEL" />
            </div>
            <div className="col50">
              <button className="addProduct-btns" onClick={handleSubmit}>SUBMIT</button>
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
  )
}

export default AddProduct