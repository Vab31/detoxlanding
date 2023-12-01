import React from 'react'
import im from './sir.png'

export default function Main() {
  return (
    <div id="main" className='border border-gray-300 shadow-md p-4 md:mx-28'>
    <section className="text-white font-semibold body-font">
    
    <div class="flex flex-col text-center w-full sm:-mb-14">
     <h1 class="sm:text-5xl text-2xl font-bold title-font " style={{"color":"rgba(91,29,236,255)"}}>Keypoint</h1>
    </div>
    
    <div className="container px-5 py-24 mx-auto flex flex-wrap ">
      <div className="lg:w-1/2 w-full  md:mb-10  lg:mb-0 rounded-lg overflow-hidden">
        <img alt="feature" className="object-cover object-center h-full w-full" src={im}/>
      </div>
      <div className="flex flex-col mt-4 flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
        <div className="flex flex-col md:mb-10 lg:items-start items-center">
          <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className=" text-2xl font-bold title-font  mb-3" style={{"color":"rgba(91,29,236,255)"}}>Nurturing Wellness</h2>
            <p className="leading-relaxed text-base">INSTALL A HEALTHY LIFE IN YOUR MIND.</p>
           
          </div>
        </div>
        <div className="flex flex-col md:mb-10 lg:items-start items-center">
          <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className=" text-2xl font-bold title-font  mb-3" style={{"color":"rgba(91,29,236,255)"}}>The Purification</h2>
            <p className="leading-relaxed text-base">UNINSTALL ALL THE DISEASES FROM YOUR MIND.</p>
            {/* <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More */}
              {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a> */}
          </div>
        </div>
        <div className="flex flex-col md:mb-10 lg:items-start items-center">
          <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className=" text-2xl font-bold title-font  mb-3" style={{"color":"rgba(91,29,236,255)"}}>Live</h2>
            <p className="leading-relaxed text-base">HOW TO LIVE A PAIN FREE LIFE ?</p>
           
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div class="p-2 w-full">
        <div class=" bg-gray-600 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font text-white font-bold text-xl md:text-2xl ">DAILY LIVE ZOOM SESSIONS</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-600 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font  text-white font-bold text-xl md:text-2xl ">1 DEC TO 31 DEC</span>
          
        </div>
      </div>
      <div class="p-2 sm:w-1/ w-full">
        <div class="bg-gray-600 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font  text-white font-bold text-xl md:text-2xl ">9:15 PM TO 10:30 PM</span>
        </div>
      </div>
    </div>
    <div className="flex justify-center mt-4">
          <button className="inline-flex text-white font-bold bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-900 rounded md:text-2xl "><a href="https://docs.google.com/forms/d/1ow7gjLAPFBJ3ko7JA0jk59wFH02dlwJS1IFWQdZuev0/edit"> Join For Free  </a></button>
          <button className="ml-4 inline-flex  text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded md:text-lg "><a href="https://chat.whatsapp.com/KwzLe4ihYAfCOuYNVqiPud" > Join WhatsApp Group</a></button>
        </div>
  </div>

 
  )
}
