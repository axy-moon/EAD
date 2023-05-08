import React , {useReducer, useEffect , useState, useRef} from 'react';
import Header from '../commonComponents/Header';
import Sidebar from '../commonComponents/Sidebar';
import Axios from 'axios';
import { OverlayPanel } from 'primereact/overlaypanel';


import { Tag } from 'primereact/tag';
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primeicons/primeicons.css";             
import { Messages } from 'primereact/messages';


// Data table
//import userfile from './user.json';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const init = initialState => initialState;
const reducer = (state, action) => {
  switch (action.type) {
    case "dataLoaded":
      return { ...state, results: action.payload, loading: false };
    default:
      throw new Error();
  }
};
var data;
Axios({
  method:"get",
  url:"http://localhost:8000/fetchallUser",
}).then((response)=>{
  //console.log(response.data.result);
  data=response.data.result;
  console.log(data);
})


function UserManagement() {
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [role, setRole] = useState("");

        const initialState = {
                results: [],
                loading: true
            };
            const [state, dispatch] = useReducer(reducer, initialState, init);
            const { results, loading } = state;

            useEffect(() => {
                if (loading) {
                dispatch({ type: "dataLoaded", payload: data });
                }
            }, [loading]);
            

            const getSeverity = (status) => {
              switch(status) {
                case 'active':
                  return 'success';
                case 'Pending':
                  return 'warning';
                default:
                  return 'default';
              }
            }

          const statusBodyTemplate = (rowData) => {
            return <Tag value={rowData.status} severity={getSeverity(rowData.status)}/>
          };

       
          const ellipsisAction = (rowData) => {
            return <i className="pi pi-ellipsis-v" style={{fontSize: '1.5rem', color: '#8F8F8F'}} />
          };

          const msgs = useRef(null);

          const addMessages = () => {
              msgs.current.show([
                  { severity: 'success', summary: '', detail: 'User Registered Successfully', sticky: true, closable: true }
              ]);
          };
      


          const handleSubmit = (e) => {
            e.preventDefault()
            console.log(name);
            console.log(email);
            console.log(role);
            
            Axios({
              method:"post",
              url:"http://localhost:8000/addUser",
              data:{
                username:email,
                roles:role
              }
            }).then((response)=>{
              alert("User, " + name+" "+ response.data);
              if (response.data==="Registered Successfully!"){
                Axios({
                  method:"post",
                  url:"http://localhost:8000/sendmail",
                  data:{
                      username:email,
                      choice:1
                  }
                })
              }
              
              
            })
          }

  return (
    <>
      <div className='grid-layout'>
        <div className='top-grid'>
          <div className='top-grid-left'>
          <p className='center-head'>Access Role Description</p>
          <p>
              <b>Admin</b><br/>
              Account owner - who created this App account and has all permissions and can give access to other users. <br/><br/>
              <b>Sales</b><br/>
              The sales team of the company - has access to view, edit and add products, product combos customers and orders. They don’t have edit access 
              on any of these modules. <br/><br/>
              <b>Accounts</b><br/>   
              The account team has access to only view the order and the dashboard
              </p>
          </div>
            <form className="top-grid-right" onSubmit={handleSubmit} action="">
            <Messages ref={msgs} />
                <h3>Invite Team</h3>      
                   <div className='field'>
                    <p>Name: </p>
                    <input type='text' placeholder='Enter the name of team member' onInput={e=>setName(e.target.value)}/>
                   </div>
                   <div className='field'>
                   <p>Email Address</p>
                    <input type='text' id="email" placeholder='Enter the name of team member' onInput={e=>setEmail(e.target.value)} />
                   </div>
                   <div className='field'>
                   <p>Role</p>
                   <select name="role" onChange={e=>setRole(e.target.value)}>
                           <option value="" hidden selected >Choose the role of the team member</option>
                           <option value="admin">Admin</option>
                           <option value="sales">Sales</option>
                          <option value="accounts">Accounts</option>
                       </select>
                   </div>
                   <input type="submit" onClick={addMessages} value={"REGISTER"} className='userRegisterBtn'/>
                   {/* <button onClick={mailSender} className='top-grid-right userRegisterBtn'>REGISTER</button> */}
                </form>
  
        </div>
        <div className='bottom-grid'>
                    <div className='dataTable'>
                      <p className='center-head'>Current Members</p>

                       <DataTable value={results} scrollable scrollHeight="240px" showGridlines tableStyle={{ textAlign:'center' }}>
                       <Column field="username" header="Name"></Column>
                       <Column field="username" header="Email"></Column>
                       <Column field="roles" header="Role"></Column>
                       <Column field="statuses" header="Status" body={statusBodyTemplate}></Column>
                       <Column header="" body={ellipsisAction}></Column>
                       </DataTable>
                   </div>
        </div>
      </div>
      </>
  );
}

export default UserManagement;
