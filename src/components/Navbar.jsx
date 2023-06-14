import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navBar">
      <NavLink
        to="/"
        className={({ isActive }) => `navBarLink ${isActive && 'active'}`}
      >
        Accueil
      </NavLink>
      <NavLink
        to="/christine"
        className={({ isActive }) => `navBarLink ${isActive && 'active'}`}
      >
        Christine Humann
      </NavLink>
      <NavLink
        to="/nelly"
        className={({ isActive }) => `navBarLink ${isActive && 'active'}`}
      >
        Nelly Martinelli
      </NavLink>
    </nav>
  )
}

export default Navbar
