
import {Routes,Route} from 'react-router-dom';

//components

import SetPassword from './components/SetPassword';
import Login from "./components/login";
import SendEmail from "./components/SendEmail";
import SendOTP from "./components/SendOTP";
import ResetPassword from './components/ResetPassword';
import Products from './components/Products';


import UserManagement from './components/UserManagement'

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
        <Route path="/userManagement" element={<UserManagement/>}/>
        <Route path="/Products" element={<Products/>}/>

        </Routes>
    </div>
  );
}
export default App;