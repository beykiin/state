// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import HighComponent from './HighComponent'
import Input from './Input'
import PersonInfo from './PersonInfo'
import State from './State'
import NameShower from './NameShower';
import { useState } from 'react';
import LoginForm from './LoginForm';
import EffectExample from './EffectExample';
import ControllerComponent from './ControllerComponent';

function App() {


  const [names,setNames]=useState(["Burak","Ahmet","Abdül Cabbar","Hayriye"])
  // const name=["Yasin"]
  // const age=[24]
  // const names=["Burak","Ahmet","Abdül Cabbar","Hayriye"]
  const handleAdds=()=>{
    const copyNames=[...names]
    copyNames.push("Fatma")
    setNames(copyNames)
    console.log(names)
  }

  return (
    <>
      {/* <State/>
      <Input/>
      <PersonInfo name={name} age={age}/> */}
      <HighComponent/>
      <button className='btn btn-outline-danger mt-3'>Wowww!</button>
      {
        names.map((name1,i)=>{
          return <NameShower name1={name1} key={i}/>
        })
      }

      <button className='btn btn-outline-success mt-3' onClick={handleAdds}>Add...</button>
{/* 
      {
        names.map((name1)=>{
          return <div>{name1}</div>
        })
      } */}
      <LoginForm/>
      <EffectExample/>
      <ControllerComponent/>

    </>
  )
}

export default App
