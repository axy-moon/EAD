import React,{useState} from 'react'
import './addProduct.css';
import Axios from 'axios';

let count=0;
const EditProducts = () => {

  const [itemCategory, setItemCategory] = useState("")
  const [itemType, setItemType] = useState("")
  const [itemId, setItemId] = useState("")
  const [availableQuantity, setAvailableQuantity] = useState("")
  const [addQuantity, setAddQuantity] = useState("")
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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(itemCategory,itemType,itemId,availableQuantity,addQuantity)
    Axios.post('http://localhost:8000/updateItem',{
      item_category:itemCategory,
      item_type:itemType,
      quantity:addQuantity
    })

    alert("Item Details Updated successfully")
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


    return(
        <>
            <div className="container-addProduct">
        <form>
          
        <div className="right-addProduct">
          <h2>Edit Existing Item</h2>
        
          <div className="row">
            <div className="col25">
              <label htmlFor="itemCategory">Item Category</label>
            </div>
            <div className="col75">
              <select id="itemCategory" name="itemCategory" onInput={(e)=>setItemCategory(e.target.value)}onChange={countSubmit}>
                <option value="default">--Select--</option>
                <option value="Stationary">Stationary</option>
                <option value="Toys">Toys</option>
                <option value="Gift Items">Gift Items</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col25">
              <label htmlFor="itemType">Item Type</label>
            </div>
            <div className="col75">
              <select id="itemType" name="itemType" onInput={(e)=>setItemType(e.target.value)}onChange={countSubmit}>
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
            </div>
          </div>

          <div className="row">
            <div className="col25">
              <label htmlFor="itemId">Item Id</label>
            </div>
            <div className="col75">
              <select id="itemId" name="itemId" onInput={(e)=>setItemId(e.target.value)}>
                <option value="itemId1">--Select---</option>
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
            <div className="col25">
              <label htmlFor="addQuantity">Add Quantity</label>
            </div>
            <div className="col75">
              <input type="text" id="addQuantity" name="addQuantity" onInput={(e)=>setAddQuantity(e.target.value)}/>
            </div>
          </div>

          
            <div className="row">
              <div className="col50">
               <input type="button" className="addProduct-btns" name="cancel" value="CANCEL" />
            </div>
            <div className="col50">
              <button className="addProduct-btns" onClick={handleSubmit}>ADD QUANTITY</button>
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

export default EditProducts