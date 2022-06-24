import React, { useState } from 'react'
import CustomArrows from './components/Slider'
const HomePage = () => {
  const points = [
    {
      text: 'Understand the Starting Point',
    },
    {
      text: 'Imagine, perceive, & anticipate',
    },
    {
      text: 'Let Technology Do the Heavy Lifting',
    },
  ]
  const [active, setActive] = useState({
    active1: true,
    active2: false,
    active3: false,
  })

  const switchHandler = (idx) => {
    if (idx === 0) {
      setActive({ active2: false, active3: false, active1: true })
    } else if (idx == 1) {
      setActive({ active2: true, active3: false, active1: false })
    } else if (idx == 2) {
      setActive({ active2: false, active3: true, active1: false })
    }
  }
  return (
    <>
      <div className='homePage topSection'>
        {/* top content */}

        <div className='leftContent'>
          <div className='heading'>
            Simplifying The Modern Financial Advice and Management Journey
          </div>
          <div className='textContent'>
            Modernise the way you engage with clients and manage your financial
            management business by using leading edge technology powered by
            KoiZai
          </div>
          <div className='btn-primary btn-start'>Get Started</div>
        </div>
        <div className='rightContent'>
          <img src='./Images/dashbard.png' alt='Dashboard' />
          <img src='./Images/coin.png' alt='Coin' />
        </div>
        {/* how section */}
      </div>
      <div className='how-section'>
        <div className='how-name'>HOW</div>
        <div className='text-content'>
          We aim to help users see SEE BEYOND the obvious in financial lifestyle
          planning and image possibilities using rich data and deep analytics
        </div>
        <img className='koiFish' src='/Images/fish.png' alt='Koi' />
        {/* points section */}

        <div className='core-points'>
          <div className='left-content'>
            {points.map((point, idx) => (
              <div
                className={`point ${active[`active${idx + 1}`] && 'active'}`}
                key={idx}
                onClick={() => switchHandler(idx)}
              >
                <span
                  className={`number ${active[`active${idx + 1}`] && 'active'}`}
                >
                  0{idx + 1}
                </span>
                <div
                  className={`text-content-point ${
                    active[`active${idx + 1}`] && 'active'
                  } `}
                >
                  {point.text}
                </div>
              </div>
            ))}
          </div>

          <div className='right-content'>
            <div className='number'>01</div>
            <div className='text'>
              To conduct insightful financial planning and wealth management we
              start with an unbiased detailed examination of the client's
              current situation.
            </div>
            <img src='./Images/starting point.png' alt='' />
          </div>
        </div>
      </div>
      {/* our features */}
      <div className='features'>
        <div className='how-name'>OUR FEATURES</div>
        <div className='text-top'>
          <div className='text-content'>
            What sets <br /> Koizai apart from the rest
          </div>
          <div className='text-content-right'>
            Our team has undertaken the challenge to create and unrivalled
            adviser clientand business management platform.{' '}
          </div>{' '}
        </div>
        <div className='details'>
          <div className='container'>
            <div className='number'>01</div>
            <div className='heading'>Fresh Technology</div>
            <div className='text'>
              Our team has undertaken the challenge to create and unrivalled
              adviser client and business management platform.
            </div>
            <div className='cover'>
              <img
                className='arrowRight'
                src='./Images/rightArrow.png'
                alt='Logo'
              />
            </div>
          </div>
          <div className='container'>
            <div className='number'>02</div>
            <div className='heading'>
              Industry experts, framework & Technology
            </div>
            <div className='text'>
              Our team has undertaken the challenge to create and unrivalled
              adviser client and business management platform.
            </div>
            <div className='cover'>
              <img
                className='arrowRight'
                src='./Images/rightArrow.png'
                alt='Logo'
              />
            </div>
          </div>{' '}
          <div className='container'>
            <div className='number'>03</div>
            <div className='heading'>Active Business Transformation</div>
            <div className='text'>
              Our team has undertaken the challenge to create and unrivalled
              adviser client and business management platform.
            </div>
            <div className='cover'>
              <img
                className='arrowRight'
                src='./Images/rightArrow.png'
                alt='Logo'
              />
            </div>
          </div>{' '}
          <div className='container'>
            <div className='number'>04</div>
            <div className='heading'>Fresh Technology</div>
            <div className='text'>
              Our team has undertaken the challenge to create and unrivalled
              adviser client and business management platform.
            </div>
            <div className='cover'>
              <img
                className='arrowRight'
                src='./Images/rightArrow.png'
                alt='Logo'
              />
            </div>
          </div>
        </div>
      </div>
      {/* testimonials  */}
      <div className='testimonials'>
        <div className='how-name'>TESTIMONIALS</div>
        <div className='msg-client'>
          Our Clients send us bunch of smiles with our <br /> services and we
          love them :)
          <img className='greenDot' src='./Images/greenDot.png' alt='' />
          <img className='yellowDot' src='./Images/yellowDot.png' alt='' />
          <img className='person-2' src='./Images/person1.png' alt='' />
          <img className='person-1' src='./Images/person2.png' alt='' />
          <img className='person-3' src='./Images/person3.png' alt='' />
          <img className='orangeDot' src='./Images/orangeDot.png' alt='' />
        </div>
        <CustomArrows />
      </div>
      <div className='footer'>
        <div className='left-main'>
          <img src='./Images/logoBottom.png' alt='Logo' />
          <div className='content'>
            <span>
              {' '}
              A: Rm 1211, 15/F, Soundwill Plaza II-Midtown, 1-29 Tang Lung
              Street,  Causeway Bay, Hong Kong
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
          <div className='limited'>
            KoiZai limited 2022. All rights reserved.
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
