import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { RootObject } from '../../typesUser'

const Users: NextPage<{products:RootObject[]}> = ({users}) => {
    console.log(users)
  return(<> <p>{JSON.stringify(users)}</p></>
      
    // <div className='prev-table'>
    //   <h1>USERS</h1>
    //   <ul>
    //     <li key="keys" className='user-li'>
    //       <div className='user-row keys-row'>
    //         <div>USER</div>
    //         <div>TYPE</div>
    //         <div>BRAND</div>
    //         <div>PRICE</div>
    //       </div>
    //     </li>
    //     {users.map(user => {
    //       const prod = user.attributes;
    //       return(
    //         <li key={prod.productID} className='user-li'>
    //           <Link href={`/users/${user.id}`}>
    //             <div className='user-row'>
    //               <div>{prod.name}</div>
    //               <div>{prod.type}</div>
    //               <div>{prod.brand}</div>
    //               <div>${prod.Price}</div>
    //             </div>
    //           </Link>
    //         </li>
    //       )
    //     })}
    //   </ul>
    // </div>
  )
}
export default Users

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:1337/api/users');
  const data = await res.json();
  return{
    props:{
      users: data
    }
  }
}