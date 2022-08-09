import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { Data } from '../../typesOrder'

const Orders: NextPage<{orders:Data[]}> = ({orders}) => {
    console.log(orders)
  return(
    <div className='collection-table'>
      <h1>ORDERS</h1>
      {/* <p>{JSON.stringify(orders)}</p> */}
      <ul>
        <li key="keys" className='keys-li'>
          <div className='data-row keys-row'>
            <div>P.O.</div>
            <div>STATUS</div>
            <div>BUY DATE</div>
            <div>DUE DATE</div>
          </div>
        </li>
        {orders.map(order => {
          const po = order.attributes;
          return(
            <li key={po.PO} className='data-li'>
              <Link href={`/orders/${order.id}`}>
                <div className='data-row'>
                  <div>{po.PO}</div>
                  <div>{po.status}</div>
                  <div>{`${po.PurchaseDate}`}</div>
                  <div>{`${po.DueDate}`}</div>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default Orders

export const getStaticProps:GetStaticProps = async () => {
  const res = await fetch('http://localhost:1337/api/orders');
  const {data} = await res.json();
  return{
    props:{
      orders: data
    }
  }
}