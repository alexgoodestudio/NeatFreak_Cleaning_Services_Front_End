import React from 'react';
import myVideo from './Images/trim.webm'; 
import myMP4Video from './Images/trim.mp4'; 

function Video() {
  return (
    <div>
      <video className='img-fluid vid' autoPlay muted loop preload="metadata" playsinline>
        <source src={myVideo} type="video/webm" />
        <source src={myMP4Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  ); 
}

export default Video;
