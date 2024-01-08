import React from 'react';
import myVideo from './Images/trim.webm'; 

function Video() {
  return (
    <div>
      <video className='img-fluid vid' autoPlay muted loop preload="metadata" playsinline>
        <source src={myVideo} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  ); 
}

export default Video;
