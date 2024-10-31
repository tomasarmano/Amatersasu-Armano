import { useState } from "react"
import FormCheckout from "./FormCheckout"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Timestamp, addDoc, collection, setDoc, doc } from "firebase/firestore"
import db from "../../db/db.js"

const Checkout = () => {
  const [dataForm, setDataForm] = useState({ 
    fullname: "",
    phone: "",
    email: "",
  })
  const [orderId, setOrderId] = useState(null)
  const { cart, totalPrice } = useContext(CartContext)

  const handleChangeInput = (event) =>{
    setDataForm({ ...dataForm, [event.target.name]: event.target.value })
  }

  const handleSubmitForm = (event) =>{
    event.preventDefault()
    const order = {
      buyer: { ...dataForm },
      products: [ ...cart ],
      date: Timestamp.fromDate(new Date()),
      total: totalPrice()
    }
    uploadOrder(order)
  }

  const uploadOrder = (newOrder) =>{
    const ordersCollection = collection(db, "orders")
    addDoc(ordersCollection, newOrder)
      .then((response)=>{
        setOrderId(response.id)
      })
      .finally(()=>{
        updateStock()
      })
  }

  const updateStock = () => {
    cart.map(({ quantity, id,  ...productCart})=>{
      const productRef = doc(db, "products", id)
      setDoc(productRef, { ...productCart, stock: productCart.stock - quantity })
    })
    deleteCart()
  }

  return (
    <div>
      {
        orderId ? (
          <div> 
            <h2>Orden enviada correctamente 😁</h2>
            <p>Guardate tu numero de seguimiento: {orderId}</p>
            <Link to="/">Volver al inicio</Link>
          </div>
        ) : (
          <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm} />
        )
      }
    </div>
  )
}

export default Checkout