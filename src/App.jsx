import React, { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim() === '') return;

    const userMessage = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);

    const botMessage = { text: getBotResponse(input), sender: 'bot' };
    setTimeout(() => {
      setMessages(prevMessages => [...prevMessages, botMessage]);
    }, 500);

    setInput('');
  };

  const getBotResponse = (input) => {
    const responses = {
      "hello": "Hi there i will help for your travel! ,what type travel do you prefer?",
      "hi": "Hi there,  i will help for your travel! ,what type travel do you prefer?",
      'bus':"please enter your current place and destination",
      'train':"please enter your current place and destination",
      'aero plane':"please enter your current place and destination",
      'aeroplane':"please enter your current place and destination",
      'plane':"please enter your current place and destination",
      'flight':"please enter your current place and destination",
      "how are you": "I'm just a bot, but I'm doing great!",
      "what is your name": "I'm a simple React chatbot.",
      "bye": "Goodbye!",
      "chennai":"ok wait for some time",
      
    "avs":"he is greatest warrior of aunty smuggling and god of seduce"
    

      
    };

    input = input.toLowerCase();
    return responses[input] || "this chatbot for your travel queries only ,please ask related to travel and tourism ";
  };

  return (
    <div className="chatbot">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}-message`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()} 
          placeholder="Type here for your travels!..........." 
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;
