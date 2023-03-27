
import React from "react";
import {useState} from 'react'
import './../styles/App.css';
import ChildComponent from "./ChildComponent";
const ParentComponent = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  let handleLogin=()=>{
    setIsLoggedIn(true)
  }
  return(
    <div>
        <h1></h1>
      {
        isLoggedIn?(<p>You are logged in!</p>):(<div><h1>ParentComponent</h1>
        <ChildComponent handleLogin={handleLogin}/></div>)

      }
        
    </div>
  )
}

export default ParentComponent
