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
            <p> WIP Chat Feature Coming Soon!</p>
          </div>
        )}
      </div>
    );
  }
  
  export default Chatbot;