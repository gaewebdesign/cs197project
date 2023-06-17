import {useState,useEffect} from 'react'




const CFormInput = (props) => {

    
    const [value,setValue]= useState( )
/*
    const [id,setID]= useState( )



    useEffect(
        () => { }
        ,[id,value]
    )
  */
  props.func(value)
  const returnValue = (v) => {
       return v;

  }

  const handleChange = (evt)=> {
        
       setValue ( evt.target.value )

  }

  return (
        <div>
    
        <div class="container-sm Function">
        <div class="row">
        <div class="col-sm-4 TextBox"> {props.name} </div>
        <div class="col-sm-8">
            <input type="text"  
                 id={props.id}
                 placeholder = {props.placeholder }
                 onChange = {handleChange}
                 funct = {returnValue}
             >
               </input>
                {value}
        </div>
        </div>
        </div> 
        



         </div>

  )


}


export {CFormInput}