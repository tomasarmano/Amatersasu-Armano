import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainerWithHoc from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 

function App() {

  return (
   <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainerWithHoc/> } />
          <Route path='/category/:idCategory' element={ <ItemListContainerWithHoc/> } />
          <Route path='/detail/:idProduct' element={ <ItemDetailContainer/> } />
        </Routes>
      </BrowserRouter>
   </>
  )
}

export default App
