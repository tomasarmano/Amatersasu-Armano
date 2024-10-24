import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./cart.css"
import { BsFillTrash3Fill } from "react-icons/bs"

const Cart = () => {
  const { cart, totalPrice, deleteProductInCart, deleteCart } = useContext(CartContext)

  if( cart.length === 0 ){
    return(
      <div className="empty-cart">
        <h2 className="title-empty-cart">El carrito esta vacio</h2>
        <Link to="/" className="button-home-empty-cart" >Volver al inicio</Link>
      </div>
    )
  }

  return (
    <div className="cart" >
      <h1 className="title-cart">Productos en el carrito</h1>
      {
        cart.map( (productCart) => (
          <div className="item-cart" key={productCart.id}>
            <img className="img-cart" src={productCart.image} width={100} alt="" />
            <p className="text-cart">{productCart.name}</p>
            <p className="text-cart">precio c/u: ${productCart.price}</p>
            <p className="text-cart">cantidad: {productCart.quantity}</p>
            <p className="text-cart">precio parcial: ${ productCart.price * productCart.quantity } </p>
            <button className="delete-cart" onClick={ () => deleteProductInCart(productCart.id) } >
              <BsFillTrash3Fill />
            </button>
          </div>
        ))
      }

      <div className="info-cart">
        <p className="text-info-cart">Precio total: ${totalPrice()}</p>
        <button className="button-delete-cart" onClick={deleteCart} >Vaciar carrito</button>
      </div>
    </div>
  )
}

export default Cart