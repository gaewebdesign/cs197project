
import Axios from 'axios'
import {useState , useEffect} from 'react'
import {CPopUp} from '../components/CPopUp.js'

/*

Test Component to display pop-up

Takes a prop of menu  values
in the form of label, value pairs
return the label value selected



or



*/


const resource = [
  {label: 1 , value:"Transportion"},
  {label: 2 , value:"Communications"},
  {label: 3 , value:"Engineering"},
  {label: 4 , value:"Search and Rescue"},
  {label: 4 , value:"Education"},
  {label: 4 , value:"Energy"}

]

const category = [
  {label: 1 , value:"must evac, secure lockdown"},
  {label: 2 , value:"may evac, secure lockdown"},
  {label: 3 , value:"no evac, limited lockdown"},
  {label: 4 , value:"no evac, no lockdown"}

]
const TestPopUpComponent = () => {


  const [CategoryMenu,setCategoryMenu] = useState([ ] )
  const [ResourceMenu,setResourceMenu] = useState( [ ] )

  const [selectResource, setSelectResource] = useState( 1 )
  const [selectCategory, setSelectCategory] = useState( 1 )


  useEffect(
     () => {console.log()},
     [ CategoryMenu, ResourceMenu, selectResource, selectCategory]

  )
  
  const pullData1 = (data)=>{
    setSelectResource(data)
    console.log("resource menu selected:" + data)
  }

  const pullData2 = (data)=>{
    setSelectCategory(data)
    console.log("category menu selected:" + data )
  }

  const GetSelections = () => {

        alert("not implemented")

   }
  // this comes from database
  const url="http://localhost:3001/test/user"


  const url_category = "http://localhost:3001/test/category"
  const url_resource ="http://localhost:3001/test/resource"

    function fetcher1(){
    Axios.get(url_resource)
    .then(
            (response)=>{
               setResourceMenu( response.data )
            }
              

    ).catch(
           (error) =>{
              alert("network error" + error )

           }

    )

  }  

  function fetcher2(){
    Axios.get(url_category)
    .then(
            (response)=>{
               setCategoryMenu( response.data )
            }
    ).catch(
          (error)=>{
              alert("network err: " + error  )
          }

    )

  } 
  
  // Get the data once
  useEffect(
    () => { fetcher1() }  , [ ]
  )

// Get the data once
 useEffect(
   () => { fetcher2() }  , [ ]
)
  return (
        <div>
        <h1>Test PopUp Menu</h1>
        <span style={{ color:'blue' ,'fontSize':'12px'}}>
        if menus are empty, then likely server isnt running<br/>
        or the database/tables not found
        </span>
        <p/>

           <CPopUp name="Resources" id="menu" menu ={ResourceMenu}  func={pullData1}/>
           <CPopUp name="Category" id="menu" menu ={CategoryMenu}  func={pullData2}/>

           <button
           type="button"
           class="btn btn-primary"
           onClick= {GetSelections }
           ><b>GetSelections</b>
          </button>

        </div>     


  )


}


export {TestPopUpComponent}