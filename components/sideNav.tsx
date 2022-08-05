import { Link } from "@mui/material"


const SideNav = () => {
  return(
    <aside className="side-nav">
      <span><Link href={`/users/`}>Users</Link></span>
      <span><Link href={`/orders/`}>Orders</Link></span>
      <span><Link href={`/products/`}>Products</Link></span>
    </aside>
  )
}
export default SideNav