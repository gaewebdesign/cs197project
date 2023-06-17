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

const url = "http://localhost:3001/test/category"
const url_primary="http://localhost:3001/test/resource"


const ClearButton = (evt) =>{


        alert("clear")
   //   alert(evt.target.value)
        console.log( evt )
   
   }
   
   let Category =[
    { label: 1, value: "initialized"  },
    { label: 2, value: "lockdown"  },
    { label: 3, value: "lockdown"  },
    { label: 4, value: "done"}
  ]

 
  const TestOptions = () => {

   const [ label, setLabel] = useState(" - ")
   const [ desc, setDesc] = useState(" - ")

   // initialize 
   const [user , setUser]= useState()
   const [CategoryMenu,setCategoryMenu] = useState([ ] )
   const [ResourceMenu,setResourceMenu] = useState( [ ] )


   const onUser = (evt)=>{
      setUser( evt.target.value)
   }

   const onPassword = (evt)=>{
   //   setPass( evt.target.value)
   }

   function fetcher(){
        Axios.get(url_primary)
        .then(
                (response)=>{
                   setResourceMenu( response.data )
                }
        )

    }   

   function fetcher2(){
    Axios.get(url)
    .then(
            (response)=>{

               setCategoryMenu( response.data)
            }
    )
} 

// Get the data once
   useEffect(
       () => { fetcher() }  , [ ]
   )
 
// Get the data once
   useEffect(
      () => { fetcher2() }  , [ ]
   )

   const ResetButton = (evt) => {

         alert("not implemented")
    }

 /*
               NOTE: select/option uses keys pairs label -> value
                     translation is needed if database isnt label->value
                let Menu = []
                response.data.map(
                    (option) => {
                        Menu.push(
                            {label: option.label , value: option.value}
                        )
                    }
              )
                setMenuOptions( Menu  )
*/   


  return (

            <div>
             <b> Fill menus from server </b><br/>

             <span style={{ color:'blue' ,'fontSize':'12px'}}>
             <span>
                If the menus below are populated, then it is working
             </span>
             <br/>
             <italics>CHECK: menu option requires keys label--value</italics><br/>
             <italics>if db columns not the same, a 'map' translation is needed <br/></italics>
             <italics>that code is commented out, response.data directly used </italics>
             </span>

             <div class="form-group">
                 <label >Name:</label>
                 <input 
                     type="text"
                     id="usr"
                     onChange = {onUser}
                 ></input>
                 <br/>{user}
                 </div>

                 <p/>
                 <b>Category Table</b> &nbsp;
                 <select>
                 {
                         CategoryMenu.map(
                               (option) => {
                                 let value = "#" + option.label + " " + option.value
                                return (
                                 <option value={option.label}>{value}</option>
                                )
                               }
                         )
                 }
               
               </select>

                 <p/>
                 <b>Resource Table</b> &nbsp;
                   <select>
                   {
                    ResourceMenu.map(
                          (option) => {
                           let value = "#" + option.label + " " + option.value
                           return (
                            <option value={option.label}>{value}</option>
                           )
                          }
                    )
            }




                   </select>
                <p/>

                <button
                       type="button"
                       class="btn btn-primary"
                       onClick= {ResetButton }
                     ><b>Reset</b>
                 </button>

            </div>



  )

}


export {TestOptions}