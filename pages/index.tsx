import type { NextPage } from 'next'
import { Button } from '@mui/material'
import { ShoppingCartRounded } from '@mui/icons-material'

const Home: NextPage = () => {
  return (
    <div className='home'>
      Hello world!
      <div>
        <Button variant="text" startIcon={<ShoppingCartRounded />}>
          Add to Cart
        </Button>
        <Button variant="contained" startIcon={<ShoppingCartRounded />}>
          Add to Cart
        </Button>
        <Button variant="outlined" startIcon={<ShoppingCartRounded />}>
          Add to Cart
        </Button>
      </div>
    </div>
  )
}

export default Home
