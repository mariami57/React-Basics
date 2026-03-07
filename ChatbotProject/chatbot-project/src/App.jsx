import { useState, useEffect } from 'react'
import { Chatbot } from 'supersimpledev';
import { ChatInput } from './components/ChatInput';
import { ChatMessages } from './components/ChatMessages';


import './App.css'


function App() {

        const [chatMessages, setChatMessages] = useState([]);
        // const [chatMessages, setChatMessages] = array;
        // const chatMessages = array[0];
        // const setChatMessages = array[1];

        useEffect(() => {
           Chatbot.addResponses({
            'how are you?':'I am good, how are you? How are you?',
            'hi':'Hello!',
            'hey':'Hello!'
          });

        }, [])

        return (
          <div className="app-container">
            {chatMessages.length === 0 && (
              <p className="welcome-message">
                 Welcome to the chatbot project! Send a message using the textbox below.
              </p>
            )}
            <ChatMessages 
              chatMessages={chatMessages}
            />
            <ChatInput
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
          </div>
        );
      }

export default App
