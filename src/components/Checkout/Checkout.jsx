import { useState } from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Timestamp, addDoc, collection, setDoc, doc } from "firebase/firestore"
import { toast } from "react-toastify"
import FormCheckout from "./FormCheckout"
import db from "../../db/db.js"
import './checkout.css'

const Checkout = () => {
  const [dataForm, setDataForm] = useState({ 
    fullname: "",
    phone: "",
    email: "",
    repeatEmail: "",
  })
  const [orderId, setOrderId] = useState(null)
  const { cart, totalPrice } = useContext(CartContext)

  const handleChangeInput = (event) =>{
    setDataForm({ ...dataForm, [event.target.name]: event.target.value })
  }
  
  const uploadOrder = (newOrder) =>{
    const ordersCollection = collection(db, "orders")
    addDoc(ordersCollection, newOrder)
    .then((response)=>{
      setOrderId(response.id)
    })
    .finally(()=>{
      toast.success("Gracias por su compra!!");
      updateStock()
    })
  }

  const handleSubmitForm = (event) => {
    event.preventDefault();
    
    if (dataForm.email === dataForm.repeatEmail) {
      const order = {
        buyer: { ...dataForm },
        products: [ ...cart ],
        date: Timestamp.fromDate(new Date()),
        total: totalPrice()
      };
      uploadOrder(order);
    } else {
      toast.error("Los emails no coinciden 🤔");
    }
  };
  
  const updateStock = () => {
    cart.map(({ quantity, id,  ...productCart})=>{
      const productRef = doc(db, "products", id)
      setDoc(productRef, { ...productCart, stock: productCart.stock - quantity })
    })
    deleteCart()
  }

  return (
    <div className="checkout">
      {
        orderId ? (
          <div> 
            <h2>Su pedido se realizo con exito!</h2>
            <p>Guardate tu numero de seguimiento: {orderId}</p>
            <Link to="/" className="home">Volver al inicio</Link>
          </div>
        ) : (
          <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm} />
        )
      }
    </div>
  )
}

export default Checkout