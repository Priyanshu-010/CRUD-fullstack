import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import useLogout  from '../../hooks/useLogout'

const Navbar = () => {

  const { logout } = useLogout();
  const handleClick = ()=>{
    logout();  
  }

  return (
    <header>
      <div className='container'>
        <Link to={'/'}>
          <h1>Products Logo</h1>
        </Link>
        <nav>
          <div>
            <button onClick={handleClick}>Logout</button>
          </div>
          <div>
            <Link to={'/login'}>Login</Link>
            <Link to={'/signup'}>Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar