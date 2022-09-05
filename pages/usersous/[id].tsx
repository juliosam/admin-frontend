import { GetStaticPaths } from "next"
import { RootObject } from "../../typesUser"


const singleProduct = ({user}:{user:RootObject}) => {
  console.log(user.orders)
  const orders = user.orders
  return(
    <div className="item-container">
      <h2>User Info</h2>
      <div className="item-characteristic">
        <span>Name</span><input value={user.username} readOnly/>
      </div>
      <div className="item-characteristic">
        <span>Email</span><input value={user.email} readOnly/>
      </div>
      <div className="item-characteristic">
        <span>Adress</span><input value={user.Adress} readOnly/>
      </div>
      <ul>
        <li className='item-rel-item' style={{
          fontWeight: 900, fontSize: '18px', paddingLeft: '20px'
          }}><h3>Orders</h3>
        </li>
        <li className='item-rel-item' style={{fontWeight: 700, fontSize: '15px'}}>
          <span>ORDER #</span>
          <span>DUE DATE</span>
        </li>
        {orders.map(order =>{
          return (
            <li key={order.PO} className='item-rel-item'>
              <span>{order.PO}</span>
              <span>{order.DueDate}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default singleProduct

export const getStaticProps = async ({params}: {params:{id:string}}) =>{
  const res = await fetch(`http://localhost:1337/api/users/${params.id}?populate=%2A`);
  const json = await res.json();
  return{
    props:{
      user: json
    }
  }
}

export const getStaticPaths = async () =>{
  const res = await fetch('http://localhost:1337/api/users');
  const data = await res.json();
  const paths: GetStaticPaths = data.map((user:RootObject)=>{
    return {params: {id: user.id.toString()}}
  })
  return{
    paths, 
    fallback: false,
  }
}