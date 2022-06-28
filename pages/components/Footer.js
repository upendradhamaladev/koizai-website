import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='left-main'>
        <img src='./Images/logoBottom.png' alt='Logo' />
        <div className='content'>
          <span>
            {' '}
            A: Rm 1211, 15/F, Soundwill Plaza II-Midtown, 1-29 Tang Lung Street,
             Causeway Bay, Hong Kong
          </span>
          <span>E: info@koizai.com</span>
        </div>
      </div>
      <div className='main'>
        <div className='info'>Let us collaborate to make this happen</div>
        <div className='info-1'>
          Explore how we can help you transform your business.
        </div>
        <button>Contact Us</button>
        <div className='menu-section'>
          <span>About</span>
          <span>Solution</span>
          <span>News</span>
          <span>Contact</span>
        </div>
        <div className='faq'>FAQs . Terms & conditions</div>
        <div className='limited'>KoiZai limited 2022. All rights reserved.</div>
      </div>
    </div>
  )
}

export default Footer
