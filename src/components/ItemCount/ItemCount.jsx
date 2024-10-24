import { useState } from 'react'
import './itemcount.css'

const ItemCount = ({ stock, addProduct }) => {
  const [count, setCount] = useState(1)

  const handleClickDecrement = () =>{
      if(count > 1) {
        setCount(count - 1)
      }  
    }

    const handleClickIncrement = () => {
      if( count  < stock ){
        setCount(count + 1)
      }
    }

  return (
    <div className='contador'>
        <div className='agregar-eliminar'>
            <button className='menos' onClick={handleClickDecrement} >-</button>
            <p>{count}</p>
            <button onClick={handleClickIncrement}>+</button>
        </div>
            <button className='agregar' onClick={ () => addProduct(count)}>Agregar al Carrito</button>
    </div>
  )
}

export default ItemCount