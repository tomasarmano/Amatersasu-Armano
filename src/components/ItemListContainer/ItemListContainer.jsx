import ItemList from "./itemList"
import "./itemlistcontainer.css"
// import Loading from "../Loading/Loading"
// import useProducts from "../../hooks/useProducts"
import hocFilterProducts from "../../hoc/hocFilterProducts"

const ItemListContainer = ({ products }) => {
  // const { products, loading } = useProducts ()

  return (
    <div className="itemlistcontainer">
      {
        // loading === true ?
        //   <Loading />
        //   :
          <ItemList products={products}/>
      }

    </div>
  )
}

const ItemListContainerWithHoc = hocFilterProducts(ItemListContainer)

export default ItemListContainerWithHoc

// export default ItemListContainer