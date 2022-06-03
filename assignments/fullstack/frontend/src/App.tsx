import React, { useEffect, useState } from 'react';
import cuid from 'cuid';
import './App.css';

import MessageList from './components/MessageList';
import { Message } from './models/Message';
import { sendMessage } from './services/messagesApi';
import * as api from './services/messagesApi';


function App() {
   const [messages, setMessages] = useState<Message[]>([]);
   const [textInput, setTextInput] = useState('');
   const handleSend = (e: React.MouseEvent) => {
      e.preventDefault();
      if (textInput === '') {
         return;
      }
      const newUserMessage: Message = {
         id: cuid(),
         message: textInput,
         timestamp: new Date().valueOf(),
         sender: 'user',
      }
      setMessages(current => [...current, newUserMessage]);
      sendMessage(textInput)
         .then((res) => {
            setTextInput('');
            setMessages(current => [...current, res]);
         })
   };
   useEffect(() => {
      api.fetchMessages().then(res => setMessages(res));
   }, []);
  return (
    <div className="chat-widget">
      <header className="chat-widget-header">
        <h1>EchoBot</h1>
      </header>
       <main className="chat-container">
          <MessageList messages={messages} />
          <div className="input-area">
             <input className="text-input" type="text" onChange={evt => setTextInput(evt.target.value)} value={textInput} />
             <button className="send-button" onClick={handleSend}>Send</button>
          </div>
       </main>
    </div>
  );
}

export default App;
