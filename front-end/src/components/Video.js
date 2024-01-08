import React from 'react';
import myVideo from './Images/trim.webm'; 
import myMP4Video from './Images/trim.mp4'; 

function Video() {
  return (
    <div>
      
      <video className='w-100 image-container' autoPlay muted loop preload="metadata" playsinline>
        <source src={myVideo} type="video/webm" />
        <source src={myMP4Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2 className="overlay-text fontLight  mb-4 d-flex justify-content-center reduce">
             Join Our Exclusive&nbsp; <span className="italics space ">Cleaning&nbsp;</span> Tips&nbsp;<span className="bold space "> Newsletter!</span>
          </h2>  
    </div>
  ); 
}

export default Video;
