import React, { useState } from 'react';
import './Dashboard.css'; // Ensure this file contains the necessary CSS for the typing/loading effect
import { listResponse } from '../utils/api';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputData, setInputData] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [pastMessages, setPastMessages] = useState([])

  function toggleChat() {
    setIsOpen(!isOpen);
  }

  const now = new Date();
  const currentDateTime = now.toLocaleString().split(',');
  const time = currentDateTime[1];

  function handleChange(event) {
    setInputData(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const abortController = new AbortController();
    const currentTime = new Date().toLocaleTimeString();
    const newMessage = { text: inputData, sender: 'user', time: currentTime }; // Include timestamp
    setIsTyping(true);
    try {
      setPastMessages(pastMessages => [...pastMessages, newMessage]);
      
      const data = await listResponse(inputData, abortController.signal);
      const responseMessage = { text: data.responses, sender: 'chatbot', time: currentTime }; // Include timestamp
      
      setPastMessages(pastMessages => [...pastMessages, responseMessage]);
  
      setInputData(''); // Clear the input field
      
      setTimeout(() => {
        setIsTyping(false);
      }, 1200); 
    } catch (error) {
      console.error(error);
      setIsTyping(false);
  
      const errorMessage = { text: "Hmm... I don't think I understand", sender: 'error', time: currentTime }; // Include timestamp
      setPastMessages(pastMessages => [...pastMessages, errorMessage]);
    }
  };
  
  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle" onClick={toggleChat}>
        Chat with us!
      </button>
      {isOpen && (
        <div className="chatbot-interface">
          <h5 className='mb-0 pb-2 pt-3 chatbot-header-background'>NeatFreak Customer Support</h5>
          <hr className='mt-0'/>

          <div className="messages-container">
            {pastMessages.map((message, index) => (
              <p key={index} className={message.sender === 'user' ? "user-message" : "chatbot-message"}>
                <span className={message.sender === 'user' ? "borderUser alert alert-primary" : "borderChatbot alert alert-secondary"}>
                  <span className="time">{message.time}</span>
                  {message.text}
                </span>
              </p>
            ))}
            {isTyping && <div className="loading-bubble">...</div>}
          </div>
          <form className="chatInput d-flex" onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="text"
              onChange={handleChange}
              value={inputData}
              name="message"
              placeholder="Type your message..."
            />
            <button type="submit" className="btn btn-secondary">
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
