import ItemList from "./itemList"
import "./itemlistcontainer.css"
import hocFilterProducts from "../../hoc/hocFilterProducts"

const ItemListContainer = ({ products }) => {

  return (
    <div className="itemlistcontainer">
      {
        <ItemList products={products}/>
      }

    </div>
  )
}

const ItemListContainerWithHoc = hocFilterProducts(ItemListContainer)

export default ItemListContainerWithHoc

