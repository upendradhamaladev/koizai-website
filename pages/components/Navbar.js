import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='outer'>
        <div className='content d-flex-row'>
          <div className='logo'>
            <img src='./Images/logo.png' alt='Logo' />
          </div>
          <div className='tabs d-flex-row'>
            <span>About</span>
            <span>Solution</span>
            <span>Blog</span>
            <span>Contact</span>
          </div>
          <div className='btn-section'>
            <button className='btn-primary'>Sign In</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
