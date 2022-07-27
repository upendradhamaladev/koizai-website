import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NewsCard from './components/NewsCard'
import { NewsData } from './components/Data'
const Blog = () => {
  return (
    <>
      <Navbar />
      <div className='blog'>
        <div className='coverTop'>
          <div className='textContent'>
            Taking control of your daily life is easy when know how!
          </div>
          <img src='./Images/fish.png' alt='fish' />
        </div>
        <div className='wrapper-global'>
          <div className='blog-content d-flex-row'>
            <div className='left d-flex-row'>
              {console.log(NewsData)}
              {NewsData.map((datum, id) => (
                <NewsCard
                  key={id}
                  image={datum?.image}
                  video={datum.url}
                  title={datum.title}
                  content={datum.content}
                  link={datum?.link}
                  date={datum?.date}
                />
              ))}
            </div>
            <div className='right'>
              {/* <div className='title'>Categories</div>
              <div className='categories'>
                <span className='category-outer active'>
                  All <span className='number'>250</span>
                </span>
                <span className='category-outer'>
                  Technology <span className='number'>250</span>
                </span>
                <span className='category-outer'>
                  Lifestyle<span className='number'>250</span>
                </span>
                <span className='category-outer'>
                  Travel<span className='number'>250</span>
                </span>
              </div> */}
              <div className='popular-blogs'>
                <div className='popular-blogs-title'>Popular</div>
                {NewsData.slice(-4).map((datum, id) => (
                  <a
                    key={id}
                    style={{ cursor: 'pointer' }}
                    href={datum.link}
                    rel='noreferrer'
                    target='_blank'
                    className='content-popular d-flex-row'
                  >
                    <img src={datum?.image} alt='blog' className='imgblogpop' />
                    {/* popular blogs */}
                    <div className='right-popular'>
                      <div className='title'>{datum?.title} </div>
                      {datum?.date && (
                        <div className='dateIs d-flex-row'>
                          <img
                            src='./BlogImages/dateIcon.svg'
                            alt='date'
                            className='dateIcon'
                          />
                          <div className='date'>{datum?.date}</div>
                        </div>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Blog
