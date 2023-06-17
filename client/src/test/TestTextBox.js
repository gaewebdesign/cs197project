// Save to data base
/*
   client side, in the React directory (client), install
   axios
--------
   server side install express,nodemon,mysql
   modify package.json, add the script
   "devStart" : "nodemon index.js"
   create index.js (start with depot index.js)
   npm run devStart

--------
   create database 'cert' ( )
   add a table for testing


*/

import Axios from 'axios'
import {useState, useEffect} from 'react'

const url="http://localhost:3001/test/user"


const ClearButton = (evt) =>{

      alert('not implemented')

}
   

const TestTestBox = () => {

   const [ user, setUser] = useState(" (name) ")
   const [ pass, setPass] = useState(" (password)")
   const [ email, setEmail] = useState(" (email)")

   const[  dbUsers , setDBUsers] = useState([])

   const onUser = (evt)=>{
      setUser( evt.target.value)
   }

   const onEmail = (evt)=>{
      setEmail( evt.target.value)
   }

   const onPassword = (evt)=>{
      setPass( evt.target.value)
   }

   function  fetcher(){
      Axios.get("http://localhost:3001/test/getusers")
      .then(
              (response)=>{
                 setDBUsers( response.data )
              }
      ).catch(
          (error)  => {
               alert("ERROR(likely no server): " + error )
          }
      )

  } 
   useEffect(
        () => { fetcher()} ,[]

   )

   const UserList = () =>{

      return dbUsers?.map(item => (
          <div>                                                                                                                                                          
             <span>{item.name}  {item.email} {item.password}</span>                                                                                               
          </div>
     ));

}



   const InsertButton = (evt) => {
 
      Axios.post(url,{name: user, email: email , password: pass } )
      .then(
         () => {  alert("check database (select * from user)")     }
      ).catch(
         () => {  alert("Error: " + url)     }
   
      )
   
   }
   
  return (

            <div>
             <b> TextBox to db ( user table ) </b><br/>
                 <div class="form-group">
                 <label >Name:</label>
                 <input 
                     type="text"
                     id="usr"
                     onChange = {onUser}
                 ></input>
                 </div>
             
                 <div class="form-group">
                 <label> Email:</label>
                 <input 
                     type="email"
                     id="email"
                     onChange = {onEmail}
                 ></input>
                 </div>


                 <div class="form-group">
                 <label >Password:</label>
                 <input 
                     type="password"
                     id="password"
                     onChange = {onPassword}
                 ></input>
                 </div>

                 <button
                       type="button"
                       class="btn btn-primary"
                       onClick= {InsertButton }
                     ><b>Insert to DB </b>
                 </button>
                 &nbsp;
                 <button
                 type="button"
                 class="btn btn-primary"
                 onClick= {ClearButton }
               ><b>Clear</b>
                 </button>
                 <br/>
                 
                 {user}  &nbsp; {email} &nbsp; {pass}

                 <p/>
                 <b>This is from user table </b>
                 <span>
                   <UserList/>
                 </span>
            </div>



  )

}


export {TestTestBox}