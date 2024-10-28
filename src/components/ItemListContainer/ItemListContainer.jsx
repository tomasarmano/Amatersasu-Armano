import ItemList from "./itemList"
import hocFilterProducts from "../../hoc/hocFilterProducts"
import Banner from "../Banner/Banner"
import "./itemlistcontainer.css"

const ItemListContainer = ({ products }) => {

  return (
    <> 
    <Banner className="banner"/>
        <div className="itemlistcontainer">
          {<ItemList products={products}/>}
        </div>
    </> 
  )
}

const ItemListContainerWithHoc = hocFilterProducts(ItemListContainer)

export default ItemListContainerWithHoc

