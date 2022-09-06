import React from 'react';
import NewsData from './NewsData';
import "./News.css";

const NewsCard = () => {
  return (
    <div className='cards'>
    <h1>Get Your Latest Sports News </h1>
    <div className='card-holder'>
      <div className='card-wrap'>
        <ul className='cards-items'>
          <NewsData
            src='images/soccer.jpg'
            text='Latest News on Scores, leagues and players'
            label='Soccer'
            path='#'
          />
          <NewsData
            src='images/nba.jpg'
            text='Latest on Basketball games, stats and live games'
            label='Basketball'
            path='#'
          />
        </ul>
        <ul className='cards-items'>
          <NewsData
            src='images/idols.jpg'
            text='Get to know more about your sporting Idols'
            label='Idols'
            path='#'
          />
          <NewsData
            src='images/tennis.jpg'
            text='All Your news in Tennis across the Globe'
            label='Tennis'
            path='#'
          />
          <NewsData
            src='images/buzzer.jpg'
            text='Enjoy Legendary moments and Highlights from Memories'
            label='Moments'
            path='#'
          />
        </ul>
      </div>
    </div>
  </div>
  )
}

export default NewsCard;