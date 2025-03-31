import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'; //Import Link from react-router-dom for navigation

const Navbar = () => {
  return (
    <header className='nav-header'>
      <Link to="/" className='logo'> {/*Link logo to home page*/}
        <img src="/logo2.png" alt="Logo" className='logo-img' />
      </Link>

      <nav className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/properties">Properties</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}

export default Navbar
