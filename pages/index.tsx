import type { NextPage } from 'next'
import { Button } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import Shop2Icon from '@mui/icons-material/Shop2';
import Link from 'next/link';

const Home: NextPage = () => {

  return (
    <div className='home'>
      <h1>ADMON SOFT</h1>
      <div className='button-section'>
        <Link href={`/products/`}>
          <Button variant="contained" endIcon={<InventoryIcon sx={{width: 30, height:30}}/>}>
            Products
          </Button>
        </Link>
        <Link href={`/usersAuth/`}>
          <Button variant="contained" endIcon={< PersonIcon sx={{width: 30, height:30}}/>}>
            Users
          </Button>
        </Link>
        <Link href={`/orders/`}>
          <Button variant="contained" endIcon={< Shop2Icon sx={{width: 30, height:30}}/>}>
            Orders
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Home
