//import logo from './logo.svg';
import './App.css';

import React from 'react'
//import { BrowserRouter,Route,Switch } from 'react-router-dom';

//import { createBrowserRouter, RouterProvider,Route,Link } from 'react-router-dom';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import {Link} from 'react-router-dom'



// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
/*
https://www.digitalocean.com/community/tutorials/how-to-handle-routing-in-react-apps-with-react-router
<AddResource />


*/

import {Login} from './components/Login.js'
import {AddResource } from './components/AddResource.js'
import {AddEmergencyIncident } from './components/AddEmergencyIncident.js'
import {Search} from './components/Search.js'

//
// ******************************************************************
import {CAddResource } from './components/CAddResource.js'
// ******************************************************************
//


import {TestTestBox} from './test/TestTextBox.js'
import {TestOptions} from './test/TestOptions.js'
import {TestFormInputComponent} from './test/TestFormInputComponent.js'
import {TestPopUpComponent} from './test/TestPopUpComponent.js'

const NavigationPage = () =>{

    return (
         <React.Fragment>

                <ul class="no-bullets">
                <li> <Link to="/"> App </Link> </li>
                <li> <Link to="/home"> Home </Link> </li>
                <li> <Link to="/login"> Login </Link> </li>               
                <li><Link to="/add"> Add Resource </Link></li>
                <li><Link to="/emerg"> Add Emergency Incident </Link></li>
                Above hardcoded menus ( no server )

                 <hr/>
                Component version (e2e: connects to server)<br/>
                <span style={{ color:'blue' ,'fontSize':'12px'}}>

                  CFormInput.js:   Input Component <br/>
                  CPopup.js:       Drop-down menu component<br/>
                  CAddResource.js: Add Resource page<br/>
                  </span>
                <li><Link to="/cadd"> Add Resource(components) </Link></li>
                <li><Link to="/search"> Search </Link></li>


                <hr/>
                <b> Below are test routines </b> <br/>
                <b> e2e: connects to  server </b>
                <li><Link to="/test1"> Test TextBox (e2e) </Link></li>
                <li><Link to="/test2"> Test Options (e2e)  </Link></li>
                <li><Link to="/test3"> Test Form Component (insert into onUser) </Link></li>
                <li><Link to="/test4"> Test PopUp Component(e2e) </Link></li>
                

                <hr/>

                </ul>
          </React.Fragment>
    )
}



const Home = () =>{
   return(
      <div>
        HOME
      </div>

    )
}

const Login_old = () =>{
  return(
      <h1> Login </h1>
  )
}




function App() {
  return (
    <div className="App">

          <h1>CIMT Routes </h1>
          <hr/>
          <BrowserRouter>

          <NavigationPage/>
            <Routes>
              <Route path="/home"  element={<Home/>} />
              <Route path="/login"  element={<Login/>} />
              <Route path="/add"  element={<AddResource/>} />
              <Route path="/emerg"  element={<AddEmergencyIncident/>} />

              <Route path="/cadd"  element={<CAddResource/>} />

              <Route path="/search"  element={<Search/>} />
              
              <Route path="/test1"  element={<TestTestBox/>} />
              <Route path="/test2"  element={<TestOptions/>} />
              <Route path="/test3"  element={<TestFormInputComponent/>} />
              <Route path="/test4"  element={<TestPopUpComponent/>} />

              </Routes>


        </BrowserRouter>

                  <div>
    
    </div>  
        

    </div>
  );
}

export default App;
