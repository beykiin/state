import React, { useState } from 'react'
import BiggerComponent from './BiggerComponent';
import LassComponent from './LassComponent';

function ControllerComponent() {
    const [number,setNumber]=useState(0)
    const handleChange=(e)=>{
        setNumber(e.target.value);
    }
  return (
    <div>
        <div><input value={number} onChange={handleChange}/></div>
        {/* {number < 5 && number > 0 && <div>Değer 5 ten küçüktür</div> }
        {number > 5 && <div>Değer 5 ten büyüktür</div>}
        {number == 5 && <div>Değer 5'tir</div>}
        {number == "" && ""} */}

        {/* { number < 5 ? <div> küçüktür </div> : <div> büyüktür </div> } */}

        { number < 5 && <LassComponent/> }
        { number > 5 && <BiggerComponent/> }
        
        
        
        
    </div>
  )
}

export default ControllerComponent