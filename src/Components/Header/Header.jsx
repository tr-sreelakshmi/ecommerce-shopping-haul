import React from 'react'
import '../Header/Header.css'
import { Link } from 'react-router-dom'


function Header() {
  return (
<header className='header'>
<Link to='/' style={{color: "aliceblue" , textDecoration: "none"}}>
      <h1  >Shopping Haul</h1>
  
</Link>   
 <Link to='/logout'>
    <button className='logout-btn'>Logout</button>

    </Link>
</header>

    )
}

export default Header