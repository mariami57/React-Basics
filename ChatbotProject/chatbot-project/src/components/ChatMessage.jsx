import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/Corn-ribs_1.webp';
import './ChatMessage.css'



export function ChatMessage({ message, sender }) {
  // const message = props.message;
  // const sender = props.sender;
  // const { message, sender } = props;

  /*
  if (sender === 'robot') {
    return (
      <div>
        <img src="robot.png" width="50" />
        {message}
      </div>
    );
  }
  */

  return (
    <div className={
      sender === 'robot' 
        ? 'chat-message-robot' 
        : 'chat-message-user'
    }>
      {sender === 'robot' && (
        <img src={ RobotProfileImage } className="chat-message-profile"/>
      )}
      <div className="chat-message-text">
        {message}
      </div>  
      {sender === 'user' && (
        <img src={ UserProfileImage } className="chat-message-profile" />
      )}
    </div>
  );
}