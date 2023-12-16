import React from 'react'
import re1 from './reviewpic.jpeg'
import re2 from './reviewpic2.jpeg'
import re3 from './reviewpic3.jpeg'

export default function Review() {
  return (
    <section className="text-gray-600 body-font  md:m-28 border border-gray-300 shadow-md">
    <div className="container px-5 py-24 mx-auto  ">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
    <h1 class="sm:text-5xl text-3xl font-bold title-font mb-9 " style={{"color":"rgba(91,29,236,255)"}}>आपको मेरी बात पर भरोसा नहीं हैं पर आप लोगो की बात पर जरूर सुनिश्चित करेंगे!</h1>
    <p className="lg:w-1/2 w-full leading-relaxed text-center text-black">Experiences shared by people who previously attended this workshop</p>
</div>
      <div className="flex flex-wrap -m-4">
        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
          <div className="h-full text-center">
            <img alt="testimonial" className="w-96 h-80 mb-8 object-cover object-center  inline-block border-4 rounded border-gray-600 bg-gray-100" src={re1}/>
         
          </div>
        </div>
        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
          <div className="h-full text-center">
            <img alt="testimonial" className="w-96 h-80 mb-8 object-cover object-center  inline-block border-4 rounded border-gray-600 bg-gray-100" src={re3}/>
 
          </div>
        </div>
        <div className="lg:w-1/3 lg:mb-0 p-4">
          <div className="h-full text-center">

          <img alt="testimonial" className="w-96 h-80 mb-8  object-center  inline-block border-4 rounded border-gray-600 bg-gray-100 " src={re2}/>
               
          </div>
        </div>
      </div>
    </div>
  </section>
)
  }
