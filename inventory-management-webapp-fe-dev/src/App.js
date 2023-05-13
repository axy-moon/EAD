
import {Routes,Route} from 'react-router-dom';

//components

import SetPassword from './components/SetPassword';
import Login from "./components/login";
import SendEmail from "./components/SendEmail";
import SendOTP from "./components/SendOTP";
import ResetPassword from './components/ResetPassword';

import UserManagement from './components/UserManagement'
import Products from './components/Products';
import Order from './components/orderModule/Order'
import AddProduct from './components/productModule/AddProduct'
import ViewProducts from './components/productModule/ViewProducts';
import EditProduct from './components/productModule/EditProduct';
import DeleteProduct from './components/productModule/DeleteProduct';
import Layout from './commonComponents/Layout'


function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/SetPassword/:token" element={<SetPassword/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SendEmail" element={<SendEmail/>}/>
        <Route path="/Reset" element={<SendOTP/>}/>
        <Route path="/ResetPassword" element={<ResetPassword/>}/>
       
        {/* <Route path="/ViewProducts" element={<ViewProducts/>}/> */}

        <Route element={<Layout />}>
          <Route path="/UserManagement" element={<UserManagement/>}/>
          <Route path="/Product" element={<Products/>}/>
          <Route path="/Order" element={<Order/>}/>
          <Route path="/AddProduct" element={<AddProduct/>}/>
          <Route path="/ViewProducts" element={<ViewProducts/>} />
          <Route path="/EditProducts" element={<EditProduct/>}/>
          <Route path="/DeleteProducts" element={<DeleteProduct/>}/>
        </Route>
        </Routes>
    </div>
  );
}
export default App;








