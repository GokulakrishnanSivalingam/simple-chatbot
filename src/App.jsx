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
      const responses = {
    "hello": "Hi! How can I help with your travel?",
    "hi": "Hello! What type of travel do you need?",
    "bus": "Tell me your current place and where you want to go.",
    "train": "Where are you now, and where do you want to go by train?",
    "aero plane": "Tell me where you are and your destination for a flight.",
    "aeroplane": "Please enter your current place and where you are flying to.",
    "plane": "What's your starting place and where are you going?",
    "flight": "Tell me your current place and where you want to fly.",
    "how are you": "I'm a bot, but I'm doing great!",
    "what is your name": "I'm your travel assistant!",
    "bye": "Goodbye! Have a nice trip!",
    "chennai": "Okay, let me find some options for Chennai.",
    "avs": "He’s a legend! and aunty lover",
        "avskumar": "He’s a legend! and aunty lover",
        "sanjeev": "He’s a legend! and aunty lover",
        "sanjeevkumar": "He’s a legend! and aunty lover",
    "help": "I can help you with bus, train, or flight travel.",
    "thank you": "You're welcome!",
    "what can you do": "I can help you plan your travel by bus, train, or flight.",
    "what is the best way to travel": "It depends! Buses are cheap, trains are scenic, flights are fast.",
    "how can I book a ticket": "Tell me your travel type and destination, and I'll guide you.",
    "suggest me a place to visit": "Maybe a beach or a hill station? Where do you like?",
    "I want to travel with friends": "That sounds fun! Where do you all want to go?",
    "I'm looking for budget travel": "Buses and trains are usually cheap. Where to?",
    "can I travel internationally": "Yes, flights are best for that. Where are you going?",
    "how to cancel a ticket": "Check your booking provider for cancellation rules.",
    "where can I find cheap flights": "Try booking early or use price comparison sites.",
    
    // New responses
    



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
