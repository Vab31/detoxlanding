import React, { Component } from 'react'


export function Video()  {

  let videoContainerStyle = {
        position: 'relative',
        paddingBottom: '56.25%', // 16:9 aspect ratio
        height: 0,
        overflow: 'hidden',
      };
    
    let  iframeStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      };
   
        return (
            <div className=' border border-gray-300 shadow-md md:m-28'>
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/s37x2VSZrLw?si=cshQ74X_4QIgjlhH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
            <div class="flex flex-col mt-8 text-center w-full sm:-mb-14" id="video">
            <h1 class="sm:text-5xl text-3xl font-bold title-font " style={{"color":"rgba(91,29,236,255)"}}>क्यों आपको शामिल होना चाहिए!</h1>
           </div>
            <div className="container px-5 py-20 mx-auto">
            
            <div className="flex flex-wrap -m-4 ">
              <div className="p-4 sm:w-1 md:w-1/2 md:ml-auto md:mr-auto ">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  {/* Wrap the iframe in a container for responsiveness */}
                  <div style={videoContainerStyle}>
                    <iframe
                      style={iframeStyle}
                      title="YouTube video player"
                      src="https://www.youtube.com/embed/JpAAFGwogF8?si=1MV89b9-Yt9bpLma"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-6 bg-slate-600">
                  <button className="inline-flex text-white font-bold bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-900 rounded md:text-2xl "><a href="/form"> Join For Free  </a></button>
    
                    <p className="leading-relaxed mb-3  text-white">Unlocking Clarity: A Journey to Detox Your Mind and Renew Your Perspective.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        );
      
            
    
        }

export default Video;