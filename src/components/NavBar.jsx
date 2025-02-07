import { NavLink } from "react-router-dom"
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
        <NavLink to="/" className='navLink'>Home</NavLink>
        <NavLink to="/Create" className='navLink'>Criar Produtos</NavLink>
    </nav>
  )
}

export default NavBar