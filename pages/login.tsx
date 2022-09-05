import { Box } from "@mui/material";
import { useState } from "react";

function Login(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = async () => {

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
    debugger
  }

  console.log('still good')

  return(
    <>
      <Box>
        <Box>
           You need an Authorized account ti acced this Page
        </Box>
        <form>
          <input type="email" onChange={e => setEmail(e.target.value)} value={email}/><br/>
          <input type="password" onChange={e => setPassword(e.target.value)} value={password}/>
          <button onClick={() => handleLogin()}>Login</button>
        </form>
      </Box>
    </>
  )
}

export default Login