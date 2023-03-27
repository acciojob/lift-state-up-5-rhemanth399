
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
      {
        isLoggedIn?(<p>You are logged in!</p>):(<ChildComponent handleLogin={handleLogin}/>)

      }
        
    </div>
  )
}

export default ParentComponent
