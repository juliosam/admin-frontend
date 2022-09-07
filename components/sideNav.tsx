import { Link } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import Navigation from "./navigation";

const SideNav = ({navigation}:any) => {

  return(
    <aside className="side-nav">
      <Link href={`/`}><HomeIcon sx={{width: 45, height:45, marginBottom:3}}/></Link>
      <span><Link href={`/usersAuth/`}>Users</Link></span>
      <span><Link href={`/orders/`}>Orders</Link></span>
      <span><Link href={`/products/`}>Products</Link></span>
      <Navigation navigation={navigation}/> 
    </aside>
  )
}               
export default SideNav