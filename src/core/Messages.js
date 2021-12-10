import Chat from './Chat';

function Messages(props) {
 return (
  <div id={'messages'} className={'chat'}>
   <h1 className={'chat-header'}>Chat Room</h1>
   {props.messages.map((message, i) => {
    return (
     <li
      id={props.messages.length-1 === i ? 'last' : ''}
      key={i + message}
     >
      <span>{message.timestamp}</span>
      <span>{message.sender}</span>
      <span>{message.text}</span>
     </li>
    );
   })}
  </div>
 );
}

export default Messages;
