import React from 'react';
import "../components/SportsNews/News.css"
import NewsCard from '../components/SportsNews/NewsCard';

const Home = () => {
  return (
    <>
    <div className='home'>
       {/* <h3> GET ALL YOUR LATEST SPORTS NEWS UPDATE RIGHT HERE </h3> */}
        <video src='/video/NewsFace.mov' autoPlay loop muted />
    </div>
        <NewsCard />
        </>
  )
}

export default Home;