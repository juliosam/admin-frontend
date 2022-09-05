import { Box } from "@mui/material"
import getConfig from "next/config"


const UsersAuth= ({users, authData}:any) => {
  console.log(users, authData)
  return (
    <>
     <Box>
       <Box>
         <p>{JSON.stringify(users)}</p>
       </Box>
     </Box>
    </>
  )
}

// const {publicRuntimeConfig} = getConfig();

export async function getServerSideProps(params:any) {

  const loginInfo = {
    identifier: 'julio@mail.mx',
    password: 'Rafaleon10'
  }

  const login = await fetch('http://localhost:1337/api/auth/local', {
    method: "POST",
    headers: {
      'Accept' : 'application/json',
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(loginInfo)
  })

  const loginResponse = await login.json()

    const res = await fetch('http://localhost:1337/api/users', {
      headers: {
        Authorization: `Bearer ${loginResponse.jwt}`
      }
    })
    const users = await res.json()

  return{
    props:{
      users: users,
      authData: loginResponse
    }
  }
}

export default UsersAuth
