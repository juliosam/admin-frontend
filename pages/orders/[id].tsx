import { GetStaticPaths } from "next"
import { Data } from "../../typesOrder"


const singleProduct = ({order}:{order:Data}) => {
  console.log(order)
  const po = order.attributes
  const prods = order.attributes.products.data
  return(
    <div className="item-container">
      <h2>Order Details</h2>
      <div className="item-characteristic">
        <span>Purchase Order</span><input value={po.PO} readOnly/>
      </div>
      <div className="item-characteristic">
        <span>Status</span><input value={po.status} readOnly/>
      </div>
      <div className="item-characteristic">
        <span>Purchase Date</span><input value={`${po.PurchaseDate}`} readOnly/>
      </div>
      <div className="item-characteristic">
        <span>Due Date</span><input value={`${po.DueDate}`} readOnly/>
      </div>
      <div className="item-characteristic">
        <span>Send to</span><input value={po.Adress} readOnly/>
      </div>
      <div className="item-characteristic">
        <span>Client email</span><input value={po.clientMail} readOnly/>
      </div>
      <ul>
        <li className='item-rel-item' style={{
          fontWeight: 900, fontSize: '18px', paddingLeft: '20px'
          }}><h3>Order List</h3>
        </li>
        <li className='item-rel-item' style={{fontWeight: 700, fontSize: '15px'}}>
          <span>PRODUCT</span>
          <span>TYPE</span>
          <span>BRAND</span>
          <span>PRICE</span>
        </li>
        {prods.map(prod =>{
          return (
            <li key={prod.id} className='item-rel-item'>
              <span>{prod.attributes.name}</span>
              <span>{prod.attributes.type}</span>
              <span>{prod.attributes.brand}</span>
              <span>${prod.attributes.Price}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default singleProduct

export const getStaticProps = async ({params}: {params:{id:string}}) =>{
  const res = await fetch(`http://localhost:1337/api/orders/${params.id}?populate=%2A`);
  const json = await res.json();
  return{
    props:{
      order: json.data
    }
  }
}

export const getStaticPaths = async () =>{
  const res = await fetch('http://localhost:1337/api/orders');
  const {data} = await res.json();
  const paths: GetStaticPaths = data.map((order:Data)=>{
    return {params: {id: order.id.toString()}}
  })
  return{
    paths, 
    fallback: false,
  }
}