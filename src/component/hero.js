import React from 'react'

export default function Hero() {
  return (
    <div>
  

    <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py- md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-5xl text-3xl mb-4 font-extrabold text text-g"  style={{"color":"rgba(91,29,236,255)"}}> FREE MINDFUL 
          <br className="hidden lg:inline-block"/> WELLNESS BOOTCAMP
        </h1>
        <p className="mb-8 leading-relaxed text-xl text-black">क्या आप  अपने बीमार शरीर को स्वस्थ शरीर में बदलना चाहते हैं ?

                              क्या आप दर्द की दवाई खा खाकर परेशान हो चुके हैं ?

                              क्या आप अपनी IMMUNITY को 10X 100X 1000X करना चाहते हैं ?

                              क्या आप पुराने ऋषि मुनियों की तरह एक स्वस्थ और लंबा जीवन जीना चाहते हैं ?

                              क्या आप अपनी सेहत की वजह से  रिश्ते और धन कमाने में कठिनाई महसूस कर रहे हैं

 </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white font-bold bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-900 rounded text-2xl"><a href="https://docs.google.com/forms/d/1ow7gjLAPFBJ3ko7JA0jk59wFH02dlwJS1IFWQdZuev0/edit" >Join For Free</a></button>
          <button className="ml-4 inline-flex  text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">Know More</button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded" alt="hero" src="https://cdn.dribbble.com/users/176039/screenshots/5500538/media/563b73b168669a54b5d08fe2c19e4cc6.gif"/>
      </div>
    </div>
  </section></div>
  )
}
