import React from 'react'
import earth from './Earth.png'
import fem from './femaleproblem.png'
import health from './healthcare.svg'
import medicine from './medicine.png'
import anger from './anger.png'
import grow from './growing-up-300.webp'

export default function Howcanjoin() {
    let data =[
        {
            img:earth,
            detail:"जो लोग प्राकृतिक रूप से अपना इंतजार कम करके मेंटेन करना चाहते हैं"
        },
        {
            img:anger,
            detail:"जो लोग तनाव और चिंता के शिकार है"
        },
        {
            img:health,
            detail:"जो लोग अपनी दवाइयों को पूरी तरह खत्म करना चाहते हैं"
        },
        {
            img:medicine,
            detail:"जो अपने आप को हमेशा फिट और हेल्दी रखना चाहते हैं।"
        },
        {
            img:grow,
            detail:"जो उम्र के साथ बिमारियो से परेशान है"
        },
        {
            img:fem,
            detail:"जिन महिलाओं को मानसिक पीड़ा होती है "
        },
    ]
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-5xl text-2xl font-bold title-font mb-2 " style={{"color":"rgba(91,29,236,255)"}}>कौन ये वर्कशॉप कर सकता है</h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-black">अपने मस्तिष्क को शुद्ध करके पॉजिटिविटी और आत्मशांति की दिशा में बदलने के लिए मानसिक दूधलाप का महत्व</p>
    </div>
    <div className="flex flex-wrap -m-4 border border-">
    {data.map((val) => (
  <div className="xl:w-1/3 md:w-1/2 p-4 " key={val.id}>
    <div className="border  border-gray-300 h-32 bg-slate-700 text-white shadow-md p-6 rounded-lg flex">
      <div className="w-20 h-10">
        <img src={val.img} alt={val.alt} />
      </div>
      <div>
        <p className="leading-relaxed text-lg">{val.detail}</p>
      </div>
    </div>
  </div>
))}

      
    </div>
  </div>
</section>
  )
}
