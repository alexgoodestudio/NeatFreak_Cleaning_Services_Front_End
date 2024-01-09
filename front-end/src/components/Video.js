import React from 'react';
import myMP4Video from './Images/neatfreak6.mp4'; 

function Video() {
  return (
    <div>
      
      <video className='w-100 image-container' autoPlay muted loop preload="metadata" playsinline>
        
        <source src={myMP4Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <h2 className="overlay-text mobileExpand fontLight    reduce">
             Join Our Exclusive <span className="italics space ">&nbsp;Cleaning&nbsp;</span> Tips<span className="bold  ">&nbsp;Newsletter!</span>
          </h2>   */}
    </div>
  ); 
}

export default Video;
