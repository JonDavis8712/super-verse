import React, { useState } from 'react'
import Header from '../components/Header'
import './Contact.css'

export default function Contact(){
  const [message, setMessage] = useState('');
  const [isMessageSent, setMessageSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('https://formspree.io/mzblvgyo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
    setMessageSent(true);
    setMessage('');
  };

  return (
    <div className="contact-body">
    <Header />
    <div className="container-contact">
    
    <h1 className="Contact">CONTACT ME:</h1>
    {isMessageSent ? (
          <p className="message-sent">Message Sent!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              className="message-input"
            />
            <button type="submit" className="contact-button">
              Send
            </button>
          </form>
        )}
    </div>
    </div>
  )
}
