import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const Contact = () => {
  return (
    <>
      <Navbar />
      <div className='contactUs'>
        <div className='top-part'>
          <div className='text'>
            Always happy to get feedback, answer <br /> any questions or book a
            demo with our <br /> sales and customer success team.
          </div>
        </div>
        <div className='title-getintouch'>Get In Touch</div>
        <div className='getIntouch'>
          <div className='left'>
            <form
              action='
              '
            >
              <div className='inputElements'>
                <input type='text' placeholder='First Name' />
                <input type='text' placeholder='Last Name' />
              </div>
              <div className='inputElements'>
                <input type='text' placeholder='Email' />
                <input type='text' placeholder='Contact Number' />
              </div>
              <div className='inputElements'>
                <textarea
                  placeholder='Your Message'
                  name=''
                  id=''
                  //   cols='30'
                  //   rows='10'
                ></textarea>
              </div>
              <button type='submit'>Send</button>
            </form>
          </div>
          <div className='right'>
            <div className='top-part-new'>
              <div className='box'>
                <div className='title'>Address</div>
                <div className='text'>
                  Rm 1211, 15/F, Soundwill Plaza II-Midtown, 1-29 Tang Lung
                  Street, Causeway Bay, Hong Kong
                </div>
              </div>
              <div className='box'>
                <div className='title'>Email</div>
                <div className='text'>info@koizai.com</div>
              </div>
            </div>
            <div className='box'>
              <div className='title'>Contact</div>
              <div className='text'>+852 8192 6445</div>
            </div>
          </div>
        </div>
        <div className='map' style={{ marginTop: '50px' }}>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.97249163927!2d114.17775851780118!3d22.27903184529477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040050cd8bc42b%3A0xa257b98c641d2e92!2s1%20Tang%20Lung%20St%2C%20Causeway%20Bay%2C%20Hong%20Kong!5e0!3m2!1sen!2snp!4v1657007236459!5m2!1sen!2snp'
            width='100%'
            height='450'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Contact
