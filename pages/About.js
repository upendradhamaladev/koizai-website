import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const About = () => {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <Navbar />
      <div className='about'>
        {/* <div className='map'></div> */}
        <br />
        <div className='mainContent'>
          <div className='content-left'>
            <div className='top'>
              <div className='content-right-small'>
                <img
                  className='model'
                  src='./Images/koizaiNew3D.png'
                  alt='3d model'
                />
              </div>
              <div className='left'>
                <div className='how-name'>ABOUT</div>
                {/* <br />
                <br />
                <br />
                <br /> */}

                <div className='text-content' style={{ width: '100%' }}>
                  A first in a multi-language modern cross-border financial and
                  wealth management system
                </div>
                <div className='middleContent'>
                  <div className='how-name'>OVERVIEW</div>
                  <div className='text'>
                    KoiZai is an AdviceTech solution built to service the
                    growing needs of the Asian and Australasian regions in
                    modernising financial planning and wealth management.
                    <br />
                    <br /> The system is built on a single platform that could
                    encompass the unique and different needs of each country,
                    local users and cross-border clients.
                    <br />
                    <br />
                    We also recognise that many users and stakeholders may not
                    use English as their first language we can also cater for
                    the diversity of cultures and languages when people are
                    dealing with their needs.
                  </div>
                </div>
              </div>
              <div className='content-right'>
                <img
                  className='model'
                  src='./Images/koizaiNew3D.png'
                  alt='3d model'
                />
              </div>
            </div>
            {/* <div className='middleContent'>
              <div className='how-name'>OVERVIEW</div>
              <div className='text'>
                KoiZai is an AdviceTech solution built to service the growing
                needs of the Asian and Australasian regions in modernising
                financial planning and wealth management.
                <br />
                <br /> The system is built on a single platform that could
                encompass the unique and different needs of each country, local
                users and cross-border clients.
                <br />
                <br />
                We also recognise that many users and stakeholders may not use
                English as their first language we can also cater for the
                diversity of cultures and languages when people are dealing with
                their needs.
              </div>
            </div> */}
          </div>
          {/* <div className='content-right'>
            <img
              className='model'
              src='./AboutImages/koizai3d.png'
              alt='3d model'
            />
          </div> */}
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
                <div className='head head-first'>Koi</div>
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
                <div className='head head-second'>Zai</div>
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
            <div className='dotis dot-top'></div>
            <div className='dotis dot'></div>
            <div className='dotis dot-1st'></div>
            <div className='dotis dot-2nd'></div>
            <div className='dotis dot-3rd'></div>
            {/* <div className='dot-final'></div> */}
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
              <div className='start'>2018</div>
              <div className='title'>First Prototype</div>
              <div className='content'>
                The first cloud-based prototype and Proof of Concept of KoiZai
                was developed with positive reviews
              </div>
            </div>{' '}
            <div className='event'>
              <div className='start'>2019</div>
              <div className='title'>
                The Decision to Build a New Architecture
              </div>
              <div className='content'>
                <img src='./Images/checkIcon.svg' alt='' />
                {'  '}
                The prototype was completely reviewed and although the system
                was working it was accepted that there would be limitations and
                scalability issues with the prototype.
                <br />
                <br />
                <img src='./Images/checkIcon.svg' alt='' />
                {'  '}
                Bravely the management team decided to completely rebuild KoiZai
                and implement a new system architecture and algorithm
              </div>
            </div>{' '}
            <div className='event'>
              <div className='start'>2020</div>
              <div className='title'>
                Acceptance Into the Cyberport Incubation program
              </div>
              {/* <div className='content'>
                In 2002 The idea of the KoiZai AdviceTech solution was conceived
                from an idea of how to build an isometric cross border financial
                advisory system while the founder was working in Singapore.
              </div> */}
            </div>{' '}
            <div className='event'>
              <div className='start'>2021</div>
              <div className='title'>
                Pre-commercial beta testing was started with users across Asia.
              </div>
              {/* <div className='content'>
                In 2002 The idea of the KoiZai AdviceTech solution was conceived
                from an idea of how to build an isometric cross border financial
                advisory system while the founder was working in Singapore.
              </div> */}
            </div>{' '}
            <div className='year'>{currentYear}</div>
          </div>
        </div>
        <div className='associates'>
          <div className='how-name'>OUR ASSOCIATES</div>
          <div className='text-content'>
            We have also built some great partnerships and friends along the way
          </div>
          <div className='subtext'>
            Building KoiZai with the help of some supporting hands is what made
            the platform successful.{' '}
          </div>
        </div>
      </div>
      <div className='images-associates'>
        <img className='associate' src='./AboutImages/logos/ifast.png' alt='' />
        <img className='associate' src='./AboutImages/logos/saxo.png' alt='' />
        <img
          className='associate'
          src='./AboutImages/logos/fitness.png'
          alt=''
        />
        <img className='associate' src='./AboutImages/logos/unsw.png' alt='' />
      </div>
      <div className='images-associates'>
        <img
          src='./AboutImages/interactivebrokers.png'
          alt=''
          className='associate'
        />
        <img
          src='./AboutImages/logos/cyberport.png'
          alt=''
          className='associate'
        />

        <img src='./AboutImages/sfa.png' alt='' className='associate' />
      </div>
      <div className='images-associates'>
        <img
          className='associate'
          src='./AboutImages/morningstar.png'
          alt=''
          className='associate'
        />

        <img
          className='associate'
          src='./AboutImages/logos/stanza.png'
          alt=''
        />
        <img className='associate' src='./AboutImages/logos/wtax.png' alt='' />
      </div>
      <Footer />
    </>
  )
}

export default About
