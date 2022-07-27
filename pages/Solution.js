import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Solution = () => {
  return (
    <>
      <Navbar />
      <div className='solutionCover'>
        <div className='right-small'>
          <img src='./SolutionImages/block.png' alt='block' />
        </div>
        <div className='left'>
          {/* <div className='title'>SOLUTION</div> */}
          <div className='text'>
            Building a modern and successful financial advisory business
            requires working with the right tools and technology solutions
          </div>
        </div>
        <div className='right'>
          <img src='./SolutionImages/block.png' alt='block' />
        </div>
      </div>
      <br />
      <div className='addressingProblem'>
        <div className='how-name'>THE PROBLEM</div>
        {/* <div className='text-top'> */}
        <div className='text-content'>Addressing the problems </div>
        <div className='animationsection'>
          <div className='left'>
            <div className='text'>
              <div className='idx  idx-left-new'>01 </div>

              <div className='content'>
                New clients, meeting client expectations.
              </div>
              <div className='idx idx-left'>01 </div>
            </div>
            <div className='text'>
              <div className='idx  idx-left-new'>02 </div>

              <div className='content'>
                Finding the right talent or strategic partners to support
                digital transformation.
              </div>
              <div className='idx idx-left'>02</div>
            </div>
            <div className='text'>
              <div className='idx  idx-left-new'>03 </div>

              <div className='content'>
                The noise of promising an developing advanced technologies.
              </div>
              <div className='idx idx-left'>03</div>
            </div>
          </div>

          <div className='right'>
            <div className='text'>
              <div className='idx idx-right'>04</div>
              <div className='content'>
                Blending digital and physical financial services without
                compromising human touch.{' '}
              </div>
            </div>
            <div className='text'>
              <div className='idx idx-right'>05</div>
              <div className='content'>
                Addressing the risk of security threats, data breaches, data
                privacy, and fraud.
              </div>
            </div>
            <div className='text'>
              <div className='idx idx-right'>06</div>
              <div className='content'>
                Is the growth of fintech a treat or an friend?{' '}
              </div>
            </div>
          </div>
          <div className='middle'>
            <div className='content'>
              <div className='textIs'>
                How do financial services <br /> organizations make <br /> sense
                of it all?
              </div>
              <div className='inner-content'>
                <img src='./Images/koizaiSmallLogo.png' alt='logo' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
     
      <div className='key-mission'>
        <div className='how-name'>OUR FOCUS</div>
        {/* <div className='text-top'> */}
        <div className='text-content'>Our Key Mission</div>
        <div className='text-content-1'>
          The KoiZai team has undertaken the challenge to create a <br />{' '}
          unrivalled adviser-client and business management <br /> platform
          based on three key principles.
        </div>
        <br />
        <div className='cards-section'>
          <div className='card'>
            <div className='title'>
              Modernize and Humanize the client-user engagement
            </div>
            <div className='content'>
              Our team has undertaken the challenge to create and unrivalled
              adviser client and business management platform.
            </div>
            <img
              className='man man-1'
              src='./SolutionImages/solution-image3.png'
              alt='girl'
            />
            <img
              className='bg bg-1'
              src='./SolutionImages/koi-frame3.png'
              alt='girl'
            />
          </div>
          <div className='card'>
            <div className='title'>
              Enables Financial Professionals and Users{' '}
            </div>
            <div className='content'>
              Financial Services Transformation and Modernise Rapid Advice
              Process.
            </div>
            <img
              className='man'
              src='./SolutionImages/solution-image1.png'
              alt='girl'
            />
            <img
              className='bg'
              src='./SolutionImages/koi-frame1.png'
              alt='girl'
            />
          </div>{' '}
          <div className='card'>
            <div className='title'>Technology to increase effeciency</div>
            <div className='content'>
              360 views of your business digital file management and
              record-keeping
            </div>
            <img
              className='man man-3'
              src='./SolutionImages/solution-image2.png'
              alt='girl'
            />
            <img
              className='bg bg-3'
              src='./SolutionImages/koi-frame2.png'
              alt='girl'
            />
          </div>
        </div>
      </div>
      <div className='help-section wave-section'>
        <div className='how-name'>OUR TECHNNOLOGY</div>
        {/* <div className='text-top'> */}
        <div className='text-content'>
          How we make good <br /> use of technology{' '}
        </div>
        <div className='img-container'>
          <img
            src='./SolutionImages/wave.png
        '
            alt=''
            className='wave'
          />
          <img
            src='./SolutionImages/hald.png
        '
            alt=''
            className='hands'
          />
        </div>
        <div className='algorithm'>
          <div className='title'>Unique and Proprietary Algorithm</div>
          <div className='content'>
            The core of Koizai is built around its unique and proprietary
            algorithm and mathematical calculation engine instead of simply a
            database or CRM. Whereas the database is the support mechanism.
            <br />
            <br /> One of the core of Artificial Intelligence (AI) can be seen
            as the use of Algorithms, and techniques for analysing them. While
            Machine Learning can be centred around Applied mathematics and
            Neural network architectures.
            <br />
            <br /> At KoiZai we are focused in combining both AI and Machining
            Learning and in time allowing for better scenario outcomes and
            financial models to support needs of the users in their pursuit of
            better financial lifestyle outcomes.
          </div>
        </div>
      </div>
      <div className='culture-section'>
        <div className='left'>
          <div className='how-name'>OUR CULTURE</div>
        
          <div className='text-content'>
            Diversity of Cultures and Languages
          </div>
          <div className='text-content-1'>
            With our Asian DNA, we believe in the diversity of cultures and
            languages.
            <br /> <br /> KoiZai is a unique Fintech platform that allows users
            to choose between a number of different languages that allow for
            better communication and understanding. While we are also focused on
            be-spoking the platform to meet local cultural needs where
            appropriate.
          </div>
          {/* <div className='know-more'>Know more about us</div> */}
        </div>
        <div className='right'>
          <img src='./SolutionImages/culture.png' alt='' />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Solution


export async function getServerSideProps(context) {
  return {
      props: {},
  };
}