import ItemList from "./itemList"
import "./itemlistcontainer.css"
import Loading from "../Loading/Loading"
import useProducts from "../../hooks/useProducts"

const ItemListContainer = ({  }) => {
  const { products, loading } = useProducts ()

  return (
    <div className="itemlistcontainer">
      {
        loading === true ?
          <Loading />
          :
          <ItemList products={products}/>
      }

    </div>
  )
}
export default ItemListContainer