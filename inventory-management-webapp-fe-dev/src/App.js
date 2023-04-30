
import {Routes,Route} from 'react-router-dom';

//components

import SetPassword from './components/SetPassword';
import Login from "./components/login";
import SendEmail from "./components/SendEmail";
import SendOTP from "./components/SendOTP";
import ResetPassword from './components/ResetPassword';

import UserManagement from './components/UserManagement'

import Product from './components/productModule/Products'
import Order from './components/orderModule/Order'
import AddProduct from './components/productModule/AddProduct'


function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/SetPassword/:id/:token" element={<SetPassword/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SendEmail" element={<SendEmail/>}/>
        <Route path="/Reset" element={<SendOTP/>}/>
        <Route path="/ResetPassword" element={<ResetPassword/>}/>
        <Route path="/UserManagement" element={<UserManagement/>}/>

        <Route path="/Product" element={<Product/>}/>
        <Route path="/Order" element={<Order/>}/>
        <Route path="/AddProduct" element={<AddProduct/>}/>
        </Routes>
    </div>
  );
}
export default App;








