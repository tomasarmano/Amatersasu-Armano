import { Link } from "react-router-dom"
import { useState } from "react"
import Back from "./Back"
import ItemCount from "../ItemCount/ItemCount"
import './itemdetail.css'

const ItemDetail = ({ product, addProduct, hideItemCount }) => {
  if (!product || !product.image || product.image.length === 0) {
    return <p>Cargando...</p>; 
}

  const [currentImage, setCurrentImage] = useState(product.image[0])

  const images = product.image.filter( (image) => image !== currentImage )

  return (
    <div className="detail">
      <Back /> 
      <div className="imagesdetailcontainer">
        <div className="secondary-images">
        {
          images.map( (image)=> (
            <img src={image} key={image} onClick={ ()=> setCurrentImage(image) }/>
          ))
        }
        </div>
        <div className="main-image">
          <img src={currentImage} alt="" />
        </div>
      </div>
      <div className="itemdetailcontainer">
        <h2 className="nombre">{product.name}</h2>
        <p className="price">Precio: ${product.price}</p>
        <p className="descripcion">{product.description}</p>
        {
          hideItemCount === true ? (
            <Link to="/cart" className="go-cart" >Ir al carrito </Link>
          ) : (
            <ItemCount stock={product.stock} addProduct={addProduct} />
          )
        }
      </div>   
    </div>
  )
}
export default ItemDetail 
