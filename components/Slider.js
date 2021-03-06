import React, { Component } from 'react'
import Slider from 'react-slick'

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div className='slick-new-prev change-btn' onClick={onClick}>
      <img src='./Images/leftArrow.png' alt='' />
    </div>
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div className='slick-new-next change-btn' onClick={onClick}>
      <img src='./Images/rightArrow.png' alt='' />
    </div>
  )
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '60px',
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            centerPadding: '80px',

            // dots: true,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            centerMode: true,
            centerPadding: '180px',

            // focusOnSelect: true,

            // dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            centerMode: true,
            centerPadding: '80px',

            // focusOnSelect: true,

            // dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            centerMode: true,
            centerPadding: '10px',

            // focusOnSelect: true,

            // dots: true,
          },
        },
      ],

      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    }
    return (
      <div className='reviewSection'>
        <Slider {...settings}>
          <div className='reviewInfo'>
            <img className='quote' src='./Images/quote.png' alt='quote' />

            <div className='text'>
              Koizai has been a new set of experience for my as well as my
              family&quot;s financial growth. Always looking out to seek advise
              regarding my current financial status and what I seek for my
              future growth. Thank you Koizai !
            </div>
            <div className='detailPerson'>
              <img className='person' src='./Images/person1.png' alt='person' />
              <div className='textDetail'>
                <div className='name'>Mahesh Bhatta</div>
                <div className='position'>CTO, Google</div>
              </div>
            </div>
          </div>
          <div className='reviewInfo'>
            <img className='quote' src='./Images/quote.png' alt='quote' />

            <div className='text'>
              Koizai has been a new set of experience for my as well as my
              family&quot;s financial growth. Always looking out to seek advise
              regarding my current financial status and what I seek for my
              future growth. Thank you Koizai !
            </div>
            <div className='detailPerson'>
              <img className='person' src='./Images/person1.png' alt='person' />
              <div className='textDetail'>
                <div className='name'>Mahesh Bhatta</div>
                <div className='position'>CTO, Google</div>
              </div>
            </div>
          </div>{' '}
          <div className='reviewInfo'>
            <img className='quote' src='./Images/quote.png' alt='quote' />

            <div className='text'>
              Koizai has been a new set of experience for my as well as my
              family&quot;s financial growth. Always looking out to seek advise
              regarding my current financial status and what I seek for my
              future growth. Thank you Koizai !
            </div>
            <div className='detailPerson'>
              <img className='person' src='./Images/person1.png' alt='person' />
              <div className='textDetail'>
                <div className='name'>Mahesh Bhatta</div>
                <div className='position'>CTO, Google</div>
              </div>
            </div>
          </div>{' '}
          <div className='reviewInfo'>
            <img className='quote' src='./Images/quote.png' alt='quote' />

            <div className='text'>
              Koizai has been a new set of experience for my as well as my
              family&quot;s financial growth. Always looking out to seek advise
              regarding my current financial status and what I seek for my
              future growth. Thank you Koizai !
            </div>
            <div className='detailPerson'>
              <img className='person' src='./Images/person1.png' alt='person' />
              <div className='textDetail'>
                <div className='name'>Mahesh Bhatta</div>
                <div className='position'>CTO, Google</div>
              </div>
            </div>
          </div>{' '}
          <div className='reviewInfo'>
            <img className='quote' src='./Images/quote.png' alt='quote' />

            <div className='text'>
              Koizai has been a new set of experience for my as well as my
              family&quot;s financial growth. Always looking out to seek advise
              regarding my current financial status and what I seek for my
              future growth. Thank you Koizai !
            </div>
            <div className='detailPerson'>
              <img className='person' src='./Images/person1.png' alt='person' />
              <div className='textDetail'>
                <div className='name'>Mahesh Bhatta</div>
                <div className='position'>CTO, Google</div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    )
  }
}
