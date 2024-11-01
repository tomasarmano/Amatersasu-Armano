import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { BsFillTrash3Fill } from "react-icons/bs"
import "./cart.css"

const Cart = () => {
  const { cart, totalPrice, deleteProductInCart, deleteCart } = useContext(CartContext)

  if( cart.length === 0 ){
    return(
      <div className="empty-cart">
        <h2 className="title">El carrito esta vacio</h2>
        <Link to="/" className="button-home" >Volver al inicio</Link>
      </div>
    )
  }

  return (
    <div className="cart" >
      <h1 className="title-cart">Productos en el carrito</h1>
      {
        cart.map( (productCart) => (
          <div className="item-cart" key={productCart.id}>
            <div className="imgcontainer">  
              <img className="img-cart" src={productCart.image[0]} alt="" />
            </div>
            <div className="detail-cart">  
              <p className="name-cart">{productCart.name}</p>
              <p className="price-cart">precio c/u: ${productCart.price}</p>
              <p className="quant-cart">cantidad: {productCart.quantity}</p>
              <p className="totalprice-cart">precio parcial: ${ productCart.price * productCart.quantity } </p>
              <button className="delete-cart" onClick={ () => deleteProductInCart(productCart.id) } >
                <BsFillTrash3Fill />
              </button>
            </div>
          </div>
        ))
      }

      <div className="info-cart">
        <p className="text-info-cart">Precio total: ${totalPrice()}</p>
        <Link to="/checkout" className="button-continue">Realizar pedido</Link>  
        <button className="button-delete-cart" onClick={deleteCart} >Vaciar carrito</button>
        <Link to="/" className="go-back">Continuar comprando</Link>
      </div>
    </div>
  )
}

export default Cart