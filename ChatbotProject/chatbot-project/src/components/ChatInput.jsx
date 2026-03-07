import { useState } from 'react'
import LoadingSpinnerImage from '../assets/loading-spinner.gif';
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages }) {
const [inputText, setInputText] = useState('');
const [isLoading, setIsLoading] = useState(false);


function saveInputText(event) {

  setInputText(event.target.value);
  }

  async function sendMessage() {

    if (isLoading || inputText === '') {
        return;
    }

    setIsLoading(true);

    const newChatMessages = [
        ...chatMessages,
        {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
        },  

    ];

    setInputText('');  

    setChatMessages(newChatMessages);

    setChatMessages([
        ...newChatMessages,
        {
        message: <img src={ LoadingSpinnerImage } className="spinner"/>,
        sender: 'robot',
        id: crypto.randomUUID()
        }
  ]);


  const response = await Chatbot.getResponseAsync(inputText);

  setChatMessages([
    ...newChatMessages,
    {
      message: response,
      sender: 'robot',
      id: crypto.randomUUID()
    }
  ]);

  setIsLoading(false);

}

function KeyboardPress(event){
      if (event.key === 'Enter'){
          sendMessage()
      } else if (event.key === 'Escape'){
          setInputText('');
      }
    }
  
  

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        onKeyDown={KeyboardPress}
        className="chat-input"
      />
      <button
        onClick={sendMessage}
        className="send-button"
      >Send</button>
    </div>
  );
}