
import React from 'react'
import Hero from './component/hero';
import Main from './component/main';
import VideoPlayer from './component/video';
import Footer from './component/footer';
import Howcanjoin from './component/how_can_join';
import Review from './component/review';
import Whatyouwill from './component/whatyouwill';

export default function Home() {
  return (
    <div>
        <Hero />
      <VideoPlayer />
      <Whatyouwill/>
      <Howcanjoin />
      <Main />
      <Review />
      <Footer />
    </div>
  )
}




