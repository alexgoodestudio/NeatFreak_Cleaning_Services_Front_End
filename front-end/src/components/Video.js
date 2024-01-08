import React from 'react';
import myVideo from './Images/trim.mp4'; 

function Video() {
  return (
    <div>
      <video className='img-fluid vid'autoPlay muted loop>
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  ); 
}

export default Video;
