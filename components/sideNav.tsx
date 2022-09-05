import { Link } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';

const SideNav = () => {
  return(
    <aside className="side-nav">
      <Link href={`/`}><HomeIcon sx={{width: 45, height:45, marginBottom:3}}/></Link>
      <span><Link href={`/usersAuth/`}>Users</Link></span>
      <span><Link href={`/orders/`}>Orders</Link></span>
      <span><Link href={`/products/`}>Products</Link></span>
    </aside>
  )
}
export default SideNav