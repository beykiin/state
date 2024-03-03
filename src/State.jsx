import React, { useState } from 'react'

function State() {
    const [count,setCount]=useState(1)
    const handleClick = () =>{
        setCount(count+1)
    }
    const handleClick2=()=>{
        if(count>0){
            setCount(count-1)
        }
    }
    const handleClick3=()=>{
        setCount(0)
    }
    
  return (
    <>
        <div>{count}</div>
        <div style={{display:"flex", gap:"1rem" , marginTop:"1rem"}}>
        <div><button onClick={handleClick}>Arttır</button></div>
        <div><button onClick={handleClick2}>Azalt</button></div>
        <div><button onClick={handleClick3}>Sıfırla</button></div>
        </div>
    </>
    
  )
}

export default State