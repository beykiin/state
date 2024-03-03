import React, { useState } from 'react'

function Input() {

    const [name,setName]=useState("")
 
    const handleChange=(e)=>{
        setName(e.target.value)

    }

    const destroy=()=>{
        setName('')
    }

  return (
    <>
        <div>İsminizi Girin:</div>
        <div><input value={name} onChange={handleChange}/></div>
        <div>İsminiz: {name} </div>
        <div><button onClick={destroy}>Temizle</button></div>

    </>
  )
}

export default Input