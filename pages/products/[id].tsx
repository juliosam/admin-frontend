import { GetStaticPaths } from "next"
import { Data } from "../../types"


const singleProduct = ({product}:{product:Data}) => {
  console.log(product)
  const prod = product.attributes
  return(
    <div className="item-container">
      <h2>Product Characteristics</h2>
      <div className="item-characteristic">
        <span>Denomination</span><input value={prod.name} readOnly/>
      </div>
      <div className="item-characteristic">
        <span>Type</span><input value={prod.type} readOnly/>
      </div>
      <div className="item-characteristic">
        <span>Brand</span><input value={prod.brand} readOnly/>
      </div>
      <div className="item-characteristic">
        <span>Serial Number</span><input value={prod.productID} readOnly/>
      </div>
      <div className="item-characteristic">
        <span>Price</span><input value={`$   ${prod.Price}.00`} readOnly/>
      </div>
      <div className="item-description">
        <span>Description</span>
        <textarea rows={12} cols={25} value={prod.Description} readOnly />
      </div>
    </div>
  )
}
export default singleProduct

export const getStaticProps = async ({params}: {params:{id:string}}) =>{
  const res = await fetch(`http://localhost:1337/api/products/${params.id}`);
  const json = await res.json();
  return{
    props:{
      product: json.data
    }
  }
}

export const getStaticPaths = async () =>{
  const res = await fetch('http://localhost:1337/api/products');
  const {data} = await res.json();
  const paths: GetStaticPaths = data.map((product:Data)=>{
    return {params: {id: product.id.toString()}}
  })
  return{
    paths, 
    fallback: false,
  }
}