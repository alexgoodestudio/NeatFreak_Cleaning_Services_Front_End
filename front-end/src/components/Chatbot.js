import React, { useState } from 'react';
import "./Dashboard.css";



function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
  
    function toggleChat(){
        setIsOpen(!isOpen)
    }

    return (
      <div className="chatbot-container">
        <button className="chatbot-toggle" onClick={toggleChat}>
          Chat with us!
        </button>
        {isOpen && (
          <div className="chatbot-interface">
            <p> (WIP) NeatFreak Customer Support!</p>
            <hr></hr>
            <div className='chatInput d-flex'>
            <input className='' placeholder='Hello'/>
            <button className='btn btn-secondary'>Send</button>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  export default Chatbot;