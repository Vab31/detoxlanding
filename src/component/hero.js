import React from 'react'

export default function Hero() {
  return (
    <div>
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Detoxyourmind</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900 hover:cursor-pointer text-white" href="#main">Know More</a>
      <a className="mr-5 hover:text-gray-900 hover:cursor-pointer text-white" href='#video'>Why Us?</a>

    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
    <a href='https://chat.whatsapp.com/KwzLe4ihYAfCOuYNVqiPud'>
   Join WhatsApp Group
      
      </a>
    </button>
  </div>
</header>

    <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-5xl text-3xl mb-4 font-extrabold text text-g"  style={{"color":"rgba(91,29,236,255)"}}> FREE MINDFUL 
          <br className="hidden lg:inline-block"/> WELLNESS BOOTCAMP
        </h1>
        <p className="mb-8 leading-relaxed text-xl text-white">क्या आप  अपने बीमार शरीर को स्वस्थ शरीर में बदलना चाहते हैं ?

क्या आप दर्द की दवाई खा खाकर परेशान हो चुके हैं ?

क्या आप अपनी IMMUNITY को 10X 100X 1000X करना चाहते हैं ?

क्या आप पुराने ऋषि मुनियों की तरह एक स्वस्थ और लंबा जीवन जीना चाहते हैं ?

क्या आप अपनी सेहत की वजह से  रिश्ते और धन कमाने में कठिनाई महसूस कर रहे हैं </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white font-bold bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-900 rounded text-2xl"><a href="https://docs.google.com/forms/d/1ow7gjLAPFBJ3ko7JA0jk59wFH02dlwJS1IFWQdZuev0/edit" >Join For Free</a></button>
          <button className="ml-4 inline-flex  text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Know More</button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded" alt="hero" src="https://cdn.dribbble.com/users/176039/screenshots/5500538/media/563b73b168669a54b5d08fe2c19e4cc6.gif"/>
      </div>
    </div>
  </section></div>
  )
}
