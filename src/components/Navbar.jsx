
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="main-navbar">

      <NavLink to="/" className="nav-brand">
        <span className="nav-brand-icon">✚</span>
        <span>NutriScan</span>
      </NavLink>

      <div className="nav-menu">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/detect">
          Detection
        </NavLink>

        <NavLink to="/about">
          About
        </NavLink>

        <NavLink to="/how-it-works">
          How It Works
        </NavLink>
      </div>

      <NavLink to="/detect" className="nav-start-button">
        Get Started <span>→</span>
      </NavLink>

    </nav>
  )
}

export default Navbar
