import React from 'react'

function NumberChange(props) {
    const degistir=()=>{
        props.setNumber(Math.floor(Math.random()*100))
    }
  return (
    <div>
        <button onClick={degistir}>Değiştir</button>
    </div>
  )
}

export default NumberChange