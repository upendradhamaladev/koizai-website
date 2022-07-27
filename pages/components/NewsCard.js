import React from 'react'

import YouTube from 'react-youtube'

const NewsCard = ({ key, image, video, title, content, link, date }) => {
  return (
    <div key={key} className='news-card'>
      {image ? (
        <img src={image} alt='date' className='blogImage' />
      ) : (
        <iframe width='100%' height='315' src={video}></iframe>
      )}
      <span className='category'>Technology</span>
      <div className='title'>{title}</div>
      {link ? (
        <>
          <div className='contentIs content'>
            {content.substring(0, 150)}...
          </div>
          <a target='_blank' href={link} 
          rel="noreferrer">
            Read More
          </a>
        </>
      ) : (
        content && <div className='content'>{content}</div>
      )}

      <div className='detail d-flex-row'>
        <div className='left-inner d-flex-row'>
          <img src='./Images/donald.jpg' alt='man' className='person' />
          <div className='description d-flex-col'>
            <div className='name'>Donald Soo</div>
            <div className='designation'>CEO, Koizai</div>
          </div>
        </div>
        {date && (
          <div className='right-inner d-flex-row'>
            <img
              src='./BlogImages/dateIcon.svg'
              alt='date'
              className='dateIcon'
            />
            <div className='date'>{date}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default NewsCard
