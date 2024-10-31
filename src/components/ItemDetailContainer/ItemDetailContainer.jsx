import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import { doc, getDoc } from "firebase/firestore"
import db from "../../db/db.js"
import { CartContext } from "../../context/CartContext.jsx"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const [hideItemCount, setHideItemCount] = useState(false)
  const { addProductInCart } = useContext(CartContext)
  const { idProduct } = useParams()

  const addProduct = (count) => {
    const productCart = { ...product, quantity: count }
    addProductInCart(productCart)
    setHideItemCount(true)
  }
    
  const getProduct = async () => {
    try {
      const docRef = doc(db, "products", idProduct);
      const dataDb = await getDoc(docRef);
      const productDb = { id: dataDb.id, ...dataDb.data() };
      setProduct(productDb);
    } catch (error) {
      console.error('Error al obtener el producto:', error);
    }
  };

  
  useEffect(() => {
    getProduct();
  }, [idProduct]);
  if (!product || Object.keys(product).length === 0) {
    return <p>Cargando...</p>;
  }


  return (
    <ItemDetail product={product} addProduct={addProduct} hideItemCount={hideItemCount} />
  )
}

export default ItemDetailContainer
