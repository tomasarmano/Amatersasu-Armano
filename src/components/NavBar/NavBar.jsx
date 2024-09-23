import logo from '../../assets/logo.png'
import CartWidget from './CartWidget'
import './navbar.scss'


const NavBar = () => {
    return (
      <nav className="navbar">
          <div className="brand">
              <img src={logo} width={80} />
          </div>
          <ul className='categories'>
            <li>Juegos PS4</li>
            <li>Figuras</li>
            <li>Mangas</li>
            <li>Posters</li>
          </ul>
          <CartWidget/>
      </nav>
    )
  }
  
  export default NavBar