import React from 'react'
import {useState} from 'react'
export default function ChildComponent(props) {
    
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    let handleUsername=(e)=>{
      setUsername(e.target.value)
    }
    let handlePassword=(e)=>{
      setPassword(e.target.value)
    }
    let handleSubmit=(e)=>
    {
      e.preventDefault();
      props.handleLogin()
      setUsername('')
      setUsername("");
     
    }
    return (
      <div>
          
          <form onSubmit={handleSubmit}>
            <label htmlFor="Username">Username:</label>
            <input type="text" value={username} onChange={handleUsername}/>
            <label htmlFor="Password">Password:</label>
            <input type="password" value={password} onChange={handlePassword}/>
            <button type='submit'>Login</button>
          </form>
      </div>
    )
}
