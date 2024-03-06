import React from 'react';
import myMP4Video from './Images/trim4.mp4'; 

function Video() {
  return (
    <div className=' '>
      <video className=' image-container p-lg-5 ' autoPlay muted loop preload="metadata" playsInline>
        <source src={myMP4Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </div>
  ); 
}

export default Video;
