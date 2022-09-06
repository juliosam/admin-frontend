import { Box } from "@mui/material";
import { useState } from "react";
import { setCookie } from 'nookies'
import Router from 'next/router'

function Login(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = async (e:any) => {

    const loginInfo = {
      identifier: email,
      password: password
    }

    const login = await fetch('http://localhost:1337/api/auth/local', {
    method: "POST",
    headers: {
      'Accept' : 'application/json',
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(loginInfo)
    })

    const loginResponse = await login.json();

    console.log(loginResponse)

    setCookie(null, 'jwt', loginResponse.jwt , {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })

    Router.push('/usersAuth')
  }

  console.log('still good')

  return(
    <>
      <Box>
        <Box>
           You need an Authorized account ti acced this Page
        </Box>
        <form onSubmit={e => handleLogin(e)}>
          <input type="email" onChange={e => setEmail(e.target.value)} value={email}/><br/>
          <input type="password" onChange={e => setPassword(e.target.value)} value={password}/>
          <button>Login</button>
        </form>
      </Box>
    </>
  )
}

export default Login