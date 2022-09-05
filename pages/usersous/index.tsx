import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { RootObject } from '../../typesUser'

const Users: NextPage<{users:RootObject[]}> = ({users}) => {
    console.log(users)
  return(
    <div className='collection-table'>
      <h1>USERS</h1>
      <ul>
        <li key="keys" className='keys-li'>
          <div className='data-row keys-row'>
            <div>ID</div>
            <div>NAME</div>
            <div>EMAIL</div>
          </div>
        </li>
        {users.map(user => {
          return(
            <li key={user.id} className='data-li'>
              <Link href={`/users/${user.id}`}>
                <div className='data-row'>
                  <div>{user.id}</div>
                  <div>{user.username}</div>
                  <div>{user.email}</div>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
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