import React from 'react'
import Navbar from './components/Navbar'
const About = () => {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <Navbar />
      <div className='about'>
        <div className='map'></div>
        <div className='mainContent'>
          <div className='content-left'>
            <div className='how-name'>ABOUT</div>
            <div className='text-content' style={{ width: '100%' }}>
              The leading modern cross border financial and wealth management
              system
            </div>
            <div className='middleContent'>
              <div className='how-name'>OVERVIEW</div>
              <div className='text'>
                KoiZai is an Asian-based AdviceTech system built to service the
                growing needs of the Asian region in modernising the financial
                planning and wealth management journey where the system does the
                heavy lifting so that the financial advisers and users can focus
                on their clients and financial lifestyle needs.
              </div>
            </div>
          </div>
          <div className='content-right'>
            <img
              className='model'
              src='./AboutImages/koizai3d.png'
              alt='3d model'
            />
          </div>
        </div>
        <div className='koizai-meaning'>
          <div className='inner'>
            <div className='how-name'>MEANING</div>
            <div className='text-content' style={{ width: '30%' }}>
              The meaning of Koizai
            </div>
            <div className='subtext'>
              What does KoiZai mean and what do we represent?
            </div>
          </div>
          <div className='images-meaning'>
            <div className='img-1'>
              <img src='./AboutImages/meaningRight.png' alt='' className='' />
              <div className='textMeaning-1'>
                <div className='head'>Koi</div>
                Koi Fish symbolize  good fortune, luck and perseverance in
                adversity and strength of purpose. Koi are also considered to be
                a symbol of material and spiritual advancement.
              </div>
            </div>
            <div className='img-2'>
              <img
                src='./AboutImages/meaningLeft.png'
                alt=''
                className='meaningRight'
              />
              <div className='textMeaning-2'>
                <div className='head'>Zai</div>
                Zai (Japanese) and Cai (Chinese) is the character for wealth,
                property, money, wealth, assets, riches, property
                and valuables.​
              </div>
            </div>
          </div>
        </div>
        <div className='ourStory'>
          <div className='title'>Our Story</div>
          <div className='how-name'>Our Story</div>
          <div className='text-content'>THE KOIZAI STORY </div>
          <div className='events'>
            <div className='year'>{currentYear}</div>
            <div className='dot'></div>
            <div className='dot-final'></div>
            <img src='./AboutImages/fish.png' alt='' className='koifish' />
            <div className='event'>
              <div className='start'>2017</div>
              <div className='title'>Start of development</div>
              <div className='content'>
                With the growing acceptance of cloud based alternatives and more
                powerful computing solutions the coding and digitizing of the
                KoiZai platform began.
              </div>
            </div>
            <div className='event'>
              <div className='start'>2002</div>
              <div className='title'>Building of algorithm</div>
              <div className='content'>
                Early work on the algorithmic financial mathematic engine
                started in late 2002. At the time the draft models were kept
                private as the efficient cloud-based technology to bring this to
                being was not readily accepted by the public or the financial
                services industry.
              </div>
            </div>{' '}
            <div className='event'>
              <div className='start'>2002</div>
              <div className='title'>Foundation</div>
              <div className='content'>
                In 2002 The idea of the KoiZai AdviceTech solution was conceived
                from an idea of how to build an isometric cross border financial
                advisory system while the founder was working in Singapore.
              </div>
            </div>{' '}
          </div>
        </div>
        <div className='associates'>
          <div className='how-name'>OUR ASSOCIATES</div>
          <div className='text-content' style={{ width: '30%' }}>
            We&quot;ve also built some great partnership along the way ...{' '}
          </div>
          <div className='subtext' style={{ width: '30%' }}>
            Building KoiZai with the help of some supporting hands is what made
            the platform successful.{' '}
          </div>
          <div className='images-associates'>
            <img
              src='./AboutImages/interactivebrokers.png'
              alt=''
              className='associate'
            />
            <img
              src='./AboutImages/morningstar.png'
              alt=''
              className='associate'
            />
            <img src='./AboutImages/sfa.png' alt='' className='associate' />
          </div>
        </div>
      </div>
    </>
  )
}

export default About
