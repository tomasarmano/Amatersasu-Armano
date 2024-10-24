import logo from '../../assets/logo.webp'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import './navbar.css'


const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <img src={logo} width={80} />
      </Link>
      <ul className='categories'>
        <li>
          <Link to="/category/juegos" className='category'>Juegos</Link>
        </li>
        <li>
          <Link to="/category/figuras"  className='category'>Figuras</Link>
        </li>
        <li>
          <Link to="/category/mangas"  className='category'>Mangas</Link>
        </li>
        <li>
          <Link to="/category/posters"  className='category'>Posters</Link>
        </li>
      </ul>
      <CartWidget/>
    </nav>
  )
}
  
  export default NavBar