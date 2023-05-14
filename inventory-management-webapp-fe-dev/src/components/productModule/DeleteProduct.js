import React,{useState} from 'react'
import './addProduct.css';

import Axios from 'axios'
import Header  from '../../commonComponents/Header'
import Sidebar from '../../commonComponents/Sidebar'


let count=0;
const DeleteProduct = () => {


  // form-value

  const [itemCategory, setItemCategory] = useState("")
  const [itemType, setItemType] = useState("")
  const [itemId, setItemId] = useState("")
  const [availableQuantity, setAvailableQuantity] = useState("")
  const [idList,setIdList]=useState([])
  const [idListHasValue,setIdListHasValue] = useState(false)



  const handleUploadImage = (e) =>
  {
    e.preventDefault()
    const imgEle = document.getElementById('output')
    imgEle.src = e.target.value;
    console.log(e.target.value)
    console.log(imgEle)
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
            
        })
    }    
}



  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(itemCategory,itemType,itemId,availableQuantity);
    alert(itemId)
    Axios.post('http://localhost:8000/deleteItem',{
      _id:itemId
    }).then(res=>{
      alert("Successfully deleted")
    })

    //alert("Product deleted successfully")
  }


    return(
        <>
            <div className="container-addProduct">
        <form>
          
        <div className="right-addProduct">
          <h2>Delete Item</h2>
        
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
              <select id="itemType" name="itemType" onInput={(e)=>setItemType(e.target.value)} onChange={countSubmit}>
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
                <option value="itemCat1">---select--</option>
                {idListHasValue && idList[0].map((product) => (
                 <option key={product._id}>{product._id}</option>
                ))}
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
              <div className="col50">
               <input type="button" className="addProduct-btns" name="cancel" value="CANCEL" />
            </div>
            <div className="col50">
              <button className="addProduct-btns" onClick={handleSubmit}>DELETE PRODUCT</button>
            </div>
            </div>
        </div> 
        
        <div className="image-upload">
                {/* <p><input type="file"  accept="image/*" name="image" id="file" onChange={handleUploadImage}/></p> */}
                <p><label htmlFor="file">Image to be displayed</label></p>
                <p><img id="output" width="200" style={{background:"blue"}}/></p>
          </div>  

        </form>
        </div>
        </>
    );
}

export default DeleteProduct