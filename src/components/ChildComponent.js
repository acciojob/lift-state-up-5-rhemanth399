import React from 'react'
import {useState} from 'react'
export default function ChildComponent({handleLogin}) {
    
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
      handleLogin()
      setUsername('')
      setUsername("");
     
    }
    return (
      <div>
          
          <form onSubmit={handleSubmit}>
            <div style={{display:'block'}}>
            <label htmlFor="Username" >Username:</label>
            <input type="text" value={username} onChange={handleUsername} />
            </div>
            <div>
            <label htmlFor="Password" style={{display:''}}>Password:</label>
            <input type="password" value={password} onChange={handlePassword} style={{display:'inline'}}/>
            </div>
            <button type='submit'>Login</button>
          </form>
      </div>
    )
}
