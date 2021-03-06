import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const HomePage = () => {
  // useEffect(() => {

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
      <Navbar />
      <div className='homePage topSection'>
        {/* top content */}

        <div className='leftContent'>
          <div className='heading'>
            Modernising The Financial Advisory Solution With Applied Fintech{' '}
          </div>
          <div className='textContent'>
            Empower and democratise the financial advisory and management
            industry with collaborative and leading edge technology.
          </div>
          <div className='btn-primary btn-start'>Book Demo</div>
        </div>
        <div className='rightContent'>
          <img src='./Images/dashbard.png' alt='Dashboard' />
          {/* <img src='./Images/coin.png' alt='Coin' /> */}
        </div>
        <div className='leftContent-new'>
          <div className='heading'>
            Modernising The Financial Advisory Solution With Applied Fintech{' '}
          </div>
          <div className='textContent'>
            Empower and democratise the financial advisory and management
            industry with collaborative and leading edge technology.
          </div>
          <div className='btn-primary btn-start'>Book Demo</div>
        </div>
        {/* how section */}
      </div>
      <div className='how-section'>
        <div className='how-name'>HOW</div>
        <div className='text-content'>
          We aim to help users SEE BEYOND the obvious in financial planning and
          wealth management. Enable new possibilities using rich data and deep
          analytics.
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
          {active.active1 ? (
            <div className='right-content'>
              <div className='number'>01</div>
              <div className='text'>
                To conduct insightful financial planning and wealth management
                we start with an unbiased detailed examination of the
                client&apos;s current situation.
              </div>
              <img src='./Images/step-1.png' alt='' />
            </div>
          ) : active.active2 ? (
            <div className='right-content'>
              <div className='number'>02</div>
              <div className='text'>
                Once the starting point is understood, the critical task of
                understanding the client&apos;s Goals and Aspiration begins in
                designing the lifestyle that they wish to achieve.
              </div>
              <img src='./Images/step-2.png' alt='' />
            </div>
          ) : active.active3 ? (
            <div className='right-content'>
              <div className='number'>03</div>
              <div className='text'>
                With the starting point and the goals defined then let KoiZai do
                the heavy lifting of calculating and modelling what;
                <div className='inner-bullets-new'>
                  <img src='./Images/checkIcon.svg' alt='' />
                  <div>Can be achieved</div>
                </div>
                <div className='inner-bullets-new'>
                  <img src='./Images/checkIcon.svg' alt='' />
                  <div>Seeing what needs to be done to be changed</div>
                </div>
                <div className='inner-bullets-new'>
                  <img src='./Images/checkIcon.svg' alt='' />
                  <div>
                    What are the multiple outcomes that can be created before
                    choosing which road to take.
                  </div>
                </div>
              </div>
              <img src='./Images/step-3.png' alt='' />
            </div>
          ) : (
            ''
          )}
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
              We bring a fresh approach to solving technical issues for the
              financial advisory industry with our easy-to-use solutions created
              by our highly experienced team with a proven track record in
              delivering innovative results.
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
              Working with our blend of industry experts, framework and use of
              the latest technology solutions we aim to shake up the status quo
              on how the financial advisory industry currently utilises
              technology in their workflow. We are focused on actively seeking
              to drive business transformation and transparent outcomes for all
              stakeholders.
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
              Innovating the advisory process in financial planning, retirement
              planning, wealth management, banking, and insurance fields, and
              wealth management for clarity and transparency is what we are all
              about.
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
            <div className='heading'>Diversity</div>
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
      {/* <div className='testimonials'>
        <div className='how-name'>TESTIMONIALS</div>
        <div className='msg-client'>
          Our Clients send us bunch of smiles with our services and we love them
          :)
          <img className='greenDot' src='./Images/greenDot.png' alt='' />
          <img className='yellowDot' src='./Images/yellowDot.png' alt='' />
          <img className='person-2' src='./Images/person1.png' alt='' />
          <img className='person-1' src='./Images/person2.png' alt='' />
          <img className='person-3' src='./Images/person3.png' alt='' />
          <img className='orangeDot' src='./Images/orangeDot.png' alt='' />
        </div>
        <CustomArrows />
      </div> */}
      {/* footer */}
      <Footer />
    </>
  )
}

export default HomePage


export async function getServerSideProps(context) {
  return {
      props: {},
  };
}