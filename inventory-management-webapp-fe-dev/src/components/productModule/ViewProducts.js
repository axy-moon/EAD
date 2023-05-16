import React,{useState, useEffect} from 'react'
import './addProduct.css'
import Axios from 'axios';

import Header  from '../../commonComponents/Header'
import Sidebar from '../../commonComponents/Sidebar'
let count=0;
const ViewProducts = () => {

  const [itemCategory, setItemCategory] = useState("")
  const [itemType, setItemType] = useState("")
  const [itemId, setItemId] = useState("")
  const [idList,setIdList]=useState([])
  const [product,setProduct]=useState([])
  const [idListHasValue,setIdListHasValue] = useState(false)
  const [productHasValue,setProductHasValue] = useState(false)
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

const handleItemCategory = (e) =>{
  e.preventDefault();
  setItemCategory(e.target.value);

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

  const handleSubmit = (e) => {
    e.preventDefault()
    Axios.post('http://localhost:8000/getItemOne',{
            product_id:itemId
            }).then(res=>{
                 var arr=res.data;
                 console.log('length',arr)
                if(arr){
                  product.push(res.data.product)
                  setProductHasValue(true)
                 }
                 else{
                  product.length=0
                  setProductHasValue(false)
                 }
                 
                 console.log('product',product.length)
                 console.log(res.data.product)
                 console.log(product);
          })
    }
  
  
  const countSubmit=(e)=>{
    
      count+=1
      console.log('countis ',count)
      if(count>=2){
           Axios.post('http://localhost:8000/getItem',{
            item_category:itemCategory,
            item_type:itemType
            }).then(res=>{
                 var arr=res.data.product;
                 console.log('length',arr.length)
                if(arr.length){
                  idList.push(res.data.product)
                  setIdListHasValue(true)
                 }
                 else{
                  idList.length=0
                  setIdListHasValue(false)
                 }
                 console.log('idlist',idList.length)
                 console.log(res.data.product)
                 console.log(idList);
          })
      }    
  }

    return(
        <>
        <div className="container-addProduct">
        <form>
          
        <div className="right-addProduct">
          <h2>View Product</h2>
        
          <div className="row">
            <div className="col25">
              <label htmlFor="itemCategory">Item Category</label>
            </div>
            {/* <div className="col75">
              <select id="itemCategory" name="itemCategory" onInput={(e)=>setItemCategory(e.target.value)} onChange={countSubmit}>
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
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col25">
              <label htmlFor="itemType">Item Type</label>
            </div>
            {/* <div className="col75">
              <select id="itemType" name="itemType" onInput={(e)=>setItemType(e.target.value)} onChange={countSubmit} >
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
              <select id="itemType" name="itemType"  onChange={(e)=>setItemType(e.target.value)}>
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
              <select id="itemId" name="itemId"  onInput={(e)=>setItemId(e.target.value)}>
                <option>--Select--</option>
{/*                  
                 
                  {
                    idListHasValue && 

                    idList[0].map(product =>{
                    console.log(product.item_category);
                    
                    <option>{product.item_category}</option>
                  
                  })
                  }

                  {arrayOfObjects.map(({ coffee, size }) => (
        <p key={coffee}>Coffee type {coffee} in a {size} size.</p>
      ))} */}

      {idListHasValue && idList[0].map((product) => (
        <option key={product.product_id}>{product.product_id}</option>
      ))}
                
                
              </select>
            </div>
          </div>
          
            <div className="row">
              <div className="col50">
               <input type="button" className="addProduct-btns" name="cancel" value="CANCEL" />
            </div>
            <div className="col50">
              <button className="addProduct-btns" onClick={handleSubmit}>VIEW PRODUCT</button>
            </div>
            </div>

<div className="row">
            <div className="col100">
              <label htmlFor="itemId"><h2>Product Details</h2></label>
              <table>
                <tr>
                  <td>Item Category</td>
                  <td>Item Type</td>
                  <td>Purchase Cost</td>
                  <td>Quantity</td>
                  <td>Deposit Amout</td>
                  <td>Sales Amount</td>
                  <td>Fine Amout</td>
                  <td>Created Date</td>

                </tr>
                {
                productHasValue && product.map((item) => (
                    <tr key={item._id}>
                      <td>{item.item_category}</td>
                      <td>{item.item_type}</td>
                      <td>{item.purchase_cost}</td>
                      <td>{item.quantity}</td>
                      <td>{item.deposit_amt}</td>
                      <td>{item.sales_amt}</td>
                      <td>{item.fine_amt}</td>
                      <td>{item.createdate}</td>
                    </tr>
                  ))}  
              </table>
            </div>
        
          </div>

        </div> 
        
        {/* <div className="image-upload"> */}
                {/* <p><input type="file"  accept="image/*" name="image" id="file" onChange={handleUploadImage}/></p> */}
                {/* <p><label htmlFor="file">Image to be displayed</label></p> */}
                {/* <p><img id="output" width="200" style={{background:"blue"}}/></p> */}
          {/* </div>   */}
          
        </form>



        </div>
        </>
    );
}

export default ViewProducts