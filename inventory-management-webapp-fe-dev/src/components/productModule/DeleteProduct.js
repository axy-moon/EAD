import React,{useState, useEffect} from 'react'
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
  const [buttondisabled,setbuttondisabled]=useState(true)
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
             setAvailableQuantity(res.data.product.quantity)
             setIdListHasValue(true)
            }
            else{
             idList.length=0
             setIdListHasValue(false)
            }
            
        })
    }    
}

const getData=(e)=>{
  Axios.post('http://localhost:8000/getQuantity',{
    item_category:itemCategory,
    item_type:itemType,
    _id:itemId
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
    console.log(itemCategory,itemType,itemId,availableQuantity);
    alert(itemId)
    Axios.post('http://localhost:8000/deleteItem',{
      _id:itemId
    }).then(res=>{
      alert("deleted Successfully ")
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
              <input type="text" id="aQuantity" name="aQuantity" value={availableQuantity} />
            </div>
          </div>
          
            <div className="row">
              <div className="col50">
               <input type="button" className="addProduct-btns" name="cancel" value="CANCEL" />
            </div>
            <div className="col50">
              <button disabled={buttondisabled} className="addProduct-btns" onClick={handleSubmit}>DELETE PRODUCT</button>
            </div>
            </div>
        </div> 
        
        {/* <div className="image-upload">
                <p><input type="file"  accept="image/*" name="image" id="file" onChange={handleUploadImage}/></p>
                <p><label htmlFor="file">Image to be displayed</label></p>
                <p><img id="output" width="200" style={{background:"blue"}}/></p>
          </div>   */}

        </form>
        </div>
        </>
    );
}

export default DeleteProduct