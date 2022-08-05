import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { Data } from '../../types'

const Products: NextPage<{products:Data[]}> = ({products}) => {
    console.log(products)
  return(
      
    <div className='prev-table'>
      <h1>PRODUCTS</h1>
      <ul>
        <li key="keys" className='product-li'>
          <div className='product-row keys-row'>
            <div>PRODUCT</div>
            <div>TYPE</div>
            <div>BRAND</div>
            <div>PRICE</div>
          </div>
        </li>
        {products.map(product => {
          const prod = product.attributes;
          return(
            <li key={prod.productID} className='product-li'>
              <Link href={`/products/${product.id}`}>
                <div className='product-row'>
                  <div>{prod.name}</div>
                  <div>{prod.type}</div>
                  <div>{prod.brand}</div>
                  <div>${prod.Price}</div>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default Products

export const getStaticProps:GetStaticProps = async () => {
  const res = await fetch('http://localhost:1337/api/products');
  const {data} = await res.json();
  return{
    props:{
      products: data
    }
  }
}