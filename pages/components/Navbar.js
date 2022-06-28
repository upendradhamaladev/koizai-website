import React from 'react'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()

  const changeActiveMenu = () => {
    if (process.browser) {
      let d = [...document.getElementsByClassName('menu-item')]
      d.forEach((element) => {
        element.addEventListener('click', () => {
          d.forEach((element) => {
            element.classList.remove('active')
            // b.classList.remove('show-menu')
          })
          element.classList.add('active')
        })
      })
    }
  }
  changeActiveMenu()
  return (
    <div className='navbar'>
      <div className='outer'>
        <div className='content d-flex-row'>
          <div className='logo'>
            <img
              src='./Images/logo.png'
              alt='Logo'
              style={{ cursor: 'pointer' }}
              onClick={() => router.push('/')}
            />
          </div>
          <div className='tabs d-flex-row'>
            <span className='menu-item' onClick={() => router.push('/About')}>
              About
            </span>
            <span
              className='menu-item'
              onClick={() => router.push('/Solution')}
            >
              Solution
            </span>
            <span className='menu-item'>Blog</span>
            <span className='menu-item'>Contact</span>
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
