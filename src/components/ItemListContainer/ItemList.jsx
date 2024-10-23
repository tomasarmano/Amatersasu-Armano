import Item from "./item"

const itemList = ({ products }) => {
  return (
    <div className="itemlist">
    {
      products.map((product) =>(
        <Item product={product} key={product.id} />
      ))
    }
    </div>
  )
}

export default itemList