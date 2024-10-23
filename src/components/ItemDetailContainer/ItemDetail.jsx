import Back from "./Back"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import './itemdetail.css'

const ItemDetail = ({ product, addProduct }) => {
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
        <ItemCount stock={product.stock} addProduct={addProduct} />
      </div>   
    </div>
  )
}

export default ItemDetail 