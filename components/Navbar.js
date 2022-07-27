import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState()
  useEffect(() => {
    if (process.browser) {
      let currentUrl = window.location.href
      let currentPage0 = currentUrl.split('/')[3]
      setCurrentPage(currentPage0)
    }
  }, [])

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
  // changeActiveMenu()
  const [open, setOpen] = useState(false)
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
            <span
              className={`menu-item ${currentPage === 'About' && 'active'}`}
              onClick={() => router.push('/About')}
            >
              About
            </span>
            <span
              className={`menu-item ${currentPage === 'Solution' && 'active'}`}
              onClick={() => router.push('/Solution')}
            >
              Solutions
            </span>
            {/* <span
              className={`menu-item ${currentPage === 'Ecosystem' && 'active'}`}
              onClick={() => router.push('/Ecosystem')}
            >
              Ecosystem
            </span> */}
            {/* <span
              className={`menu-item ${currentPage === 'Diversity' && 'active'}`}
              onClick={() => router.push('/Diversity')}
            >
              Diversity
            </span> */}
            <span
              className={`menu-item ${currentPage === 'Blog' && 'active'}`}
              onClick={() => router.push('/Blog')}
            >
              News
            </span>
            <span
              className={`menu-item ${currentPage === 'Contact' && 'active'}`}
              onClick={() => router.push('/Contact')}
            >
              Contact
            </span>
          </div>
          <div className='btn-section'>
            <button
              className='btn-primary'
              onClick={() =>
                (window.location.href = 'http://staging.koizai.com/app/login')
              }
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
      <div className='responsive-navbar'>
        <div className='logo'>
          <img
            src='./Images/koizaiSmallLogo.png'
            alt='Logo'
            style={{ cursor: 'pointer' }}
            onClick={() => router.push('/')}
          />
        </div>
        <div className='icon'>
          <img
            onClick={() => setOpen(true)}
            src='./Images/hamburgerMenu.png'
            alt='amurger'
          />
        </div>
        {open && (
          <div className={`overlay-menu ${open && 'slide'}`}>
            <div className='top'>
              <img src='./Images/koizaiSmallLogo.png' alt='' />
              <img
                onClick={() => setOpen(false)}
                src='./Images/close.png'
                alt=''
              />
            </div>
            <div className='menus'>
              <div className='menu-list'>
                <span
                  className={`menu-item ${currentPage === 'About' && 'active'}`}
                  onClick={() => router.push('/About')}
                >
                  About
                </span>
              </div>
              <div className='menu-list'>
                <span
                  className={`menu-item ${
                    currentPage === 'Solution' && 'active'
                  }`}
                  onClick={() => router.push('/Solution')}
                >
                  Solutions
                </span>
              </div>
              {/* <div className='menu-list'>
                <span
                  className={`menu-item ${
                    currentPage === 'Ecosystem' && 'active'
                  }`}
                  onClick={() => router.push('/Ecosystem')}
                >
                  Ecosystem
                </span>
              </div> */}
              {/* <div className='menu-list'>
                <span
                  className={`menu-item ${
                    currentPage === 'Diversity' && 'active'
                  }`}
                  onClick={() => router.push('/Diversity')}
                >
                  Diversity
                </span>
              </div> */}
              <div className='menu-list'>
                <span
                  className={`menu-item ${currentPage === 'Blog' && 'active'}`}
                  onClick={() => router.push('/Blog')}
                >
                  News
                </span>
              </div>
              <div className='menu-list'>
                <span
                  className={`menu-item ${
                    currentPage === 'Contact' && 'active'
                  }`}
                  onClick={() => router.push('/Contact')}
                >
                  Contact
                </span>
              </div>

              <div
                className='signin'
                onClick={() =>
                  (window.location.href = 'http://staging.koizai.com/app/login')
                }
              >
                Sign In
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
