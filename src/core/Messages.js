import Chat from './Chat';

function Messages(props) {
 return (
  <div id={'messages'} className={'chat'}>
   <h1 className={'chat-header'}>Chat Room</h1>
   {props.messages.map((message, i) => {
    return (
     <div
      className="message-container"
      id={props.messages.length - 1 === i ? 'last' : ''}
      key={i + message}
     >
      <div className="name">{message.sender}</div>
      <div className="message">{message.text}</div>
      <div className="timestamp">{message.timestamp}</div>
     </div>
    );
   })}
  </div>
 );
}

export default Messages;
