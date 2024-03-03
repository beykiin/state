import React, { useEffect, useState } from 'react'

function EffectExample() {
    const [number,setNumber]=useState(0)
    const handleClick2=()=>{
        setNumber(Math.floor(Math.random()*100))
        // console.log(number)
    }

    useEffect(()=>{
        console.log(number)
    },[number])

    // useEffect(()=>{
    //     console.log("useEffect Çağırıldı")
    // })

    // useEffect(()=>{
    //     console.log("Bir kere çalıştı")
    // },[])
  return (
    <div>
        {number}
        <div><button className='btn btn-outline-info' onClick={handleClick2}>Değiştir</button></div>
    </div>
  )
}

export default EffectExample