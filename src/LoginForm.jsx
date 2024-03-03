import React, { useState } from 'react'
function LoginForm() {
    const [username,setUsername]=useState()
    const [password,setPassword]=useState()

    console.log("username: "+username)
    console.log("password: "+password)

    const handleUsername=(e)=>{
        setUsername(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
    const clickHandler=()=>{
        const body={
            username:username,
            password:password
        }
        console.log(body)
    }
  return (
    <>
        <div>Kullanıcı Adı: <input placeholder='Please enter the username..' type='text' value={username} onChange={handleUsername}/> </div>
        <div>Şifre: <input placeholder='Please enter the password..' type='password' value={password} onChange={handlePassword}/> </div>
        <div><button onClick={clickHandler} className='btn btn-outline-danger'>Giriş Yap!</button></div>

    </>
  )
}

export default LoginForm