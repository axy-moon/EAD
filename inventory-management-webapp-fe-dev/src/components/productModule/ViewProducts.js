import React,{useState} from 'react'
import './addProduct.css'
import Axios from 'axios';

import Header  from '../../commonComponents/Header'
import Sidebar from '../../commonComponents/Sidebar'
let count=0;
const ViewProducts = () => {

  
  // form-value

  const [itemCategory, setItemCategory] = useState("")
  const [itemType, setItemType] = useState("")
  const [itemId, setItemId] = useState("")
  const [idList,setIdList]=useState([])
  const [idListHasValue,setIdListHasValue] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(itemCategory,itemType,itemId)

    alert("Product Details Displayed on the screen")
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
            <div className="col75">
              <select id="itemCategory" name="itemCategory" onInput={(e)=>setItemCategory(e.target.value)} onChange={countSubmit}>
               <option value="itemCat1">--select--</option>
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
              <select id="itemType" name="itemType" onInput={(e)=>setItemType(e.target.value)} onChange={countSubmit} >
              <option value="itemCat1">--select--</option>
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
              <select id="itemId" name="itemId"  onInput={(e)=>setItemId(e.target.value)}>
                <option>--select--</option>
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
        <option key={product._id}>{product._id}</option>
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
            <div className="col25">
              <label htmlFor="itemId"><h2>Product Details</h2></label>
              <p>Product Details should be displaed</p>
            </div>
            <div className="col75">
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