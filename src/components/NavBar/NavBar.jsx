import logo from '../../assets/logo.png'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import './navbar.scss'


const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <img src={logo} width={80} />
      </Link>
      <ul className='categories'>
        <li className='category'>
          <Link to="/category/juegos">Juegos</Link>
        </li>
        <li className='category'>
          <Link to="/category/figuras">Figuras</Link>
        </li>
        <li className='category'>
          <Link to="/category/mangas">Mangas</Link>
        </li>
        <li className='category'>
          <Link to="/category/posters">Posters</Link>
        </li>
      </ul>
      <CartWidget/>
    </nav>
  )
}
  
  export default NavBar