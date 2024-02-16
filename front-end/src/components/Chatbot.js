import React, { useState } from 'react';
import './Dashboard.css'; // Ensure this file contains the necessary CSS for the typing/loading effect
import { listResponse } from '../utils/api';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputData, setInputData] = useState('');
  const [error, setError] = useState('');
  const [response, setResponse] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pastMessage, setPastMessage] = useState([])

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
    setMessageSent(true);
    setIsTyping(true);
    try {
      const data = await listResponse(inputData, abortController.signal);
      setPastMessage(inputData)
      setVisible(!visible)
      setResponse(data.responses);

      setTimeout(() => {
        setIsTyping(false);
      }, 1000); 
    } catch (error) {
      setError("Hmm... I don't think I understand");
      console.error(error);
      setIsTyping(false); 
    }
  };

  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle" onClick={toggleChat}>
        Chat with us!
      </button>
      {isOpen && (
        <div className="chatbot-interface">
          <p> NeatFreak Customer Support</p>
          <hr />
          {error && <p className="text-dark alert alert-danger ">{error}</p>}
          {visible &&( 
          <p>
          <span className="borderUser alert alert-primary">
                <span className="time">{time}</span>
                {pastMessage}
              </span>
          </p>
          )}
          {messageSent && !isTyping && (
            <p className="">
              <br />
              <span className="borderChatbot alert alert-secondary">
                <span className="time">{time}</span>
                {response}
              </span>
            </p>
          )}
          {isTyping && <div className="loading-bubble">...</div>}
          <form className="chatInput d-flex" onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="text"
              onChange={handleChange}
              value={inputData}
              name="message"
              placeholder="Feature Coming Soon"
              //Type your message...
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
