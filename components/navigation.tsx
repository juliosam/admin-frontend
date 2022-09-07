import Link from "next/link"
import { useRouter } from "next/router"

const Navigation = ({navigation}:any) => {

  const router = useRouter();
  console.log(router);
  console.log(navigation)

  return (
    <ul>

      {/* {navigation.map((nav:any) => {
       return ( 
        <li><Link href={`${nav.slug}`}><a>{nav.title}</a></Link></li>
       )
      })} */}
      <li><Link href={`/usersAuth/`}><a>Users</a></Link></li>
      <li><Link href={`/orders/`}><a>Orders</a></Link></li>
      <li><Link href={`/products/`}><a>Products</a></Link></li>
    </ul>
  )
}
export default Navigation
