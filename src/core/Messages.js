function Messages(props) {
 return (
  <div className={'chat'}>
   <h1>Chat Room</h1>
   {props.messages.map((message, i) => {
    return (
     <li key={i + message}>
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
