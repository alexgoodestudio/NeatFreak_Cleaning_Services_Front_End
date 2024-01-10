import React from 'react';
import myMP4Video from './Images/neatfreak6.mp4'; 

function Video() {
  return (
    <div>
      
      <video className='w-100 image-container' autoPlay muted loop preload="metadata" playsInline>
        
        <source src={myMP4Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </div>
  ); 
}

export default Video;
