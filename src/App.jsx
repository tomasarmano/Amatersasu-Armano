import { CartProvider } from './context/CartContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import NavBar from './components/NavBar/NavBar'
import ItemListContainerWithHoc from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Form from './components/Form/Form'
import Cart from './components/Cart/Cart'
import Checkout from "./components/Checkout/Checkout"
import './App.css'

function App() {

  return (
   <>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={ <ItemListContainerWithHoc/> } />
            <Route path='/category/:idCategory' element={ <ItemListContainerWithHoc/> } />
            <Route path='/detail/:idProduct' element={ <ItemDetailContainer/> } />
            <Route path='/micuenta' element={ <Form/> } />
            <Route path='/cart' element={ <Cart/> } />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
   </>
  )
}

export default App
