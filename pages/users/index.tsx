import { Box } from "@mui/material"

const UsersBlocked= () => {
  return (
    <>
     <Box>
       <Box>
         <p>Users</p>
       </Box>
     </Box>
    </>
  )
}

// const {publicRuntimeConfig} = getConfig();

export async function getServerSideProps(params:any) {

  return{
    props:{
    }
  }
}

export default UsersBlocked
