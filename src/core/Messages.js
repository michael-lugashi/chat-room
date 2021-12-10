function Messages(props) {
 return (
  <div id={'messages'} className={'chat'}>
   <h1 className={'chat-header'}>Chat Room</h1>
   <div className="messages-container">
    {props.messages.map((message, i) => {
     return (
      <div
       style={
        message.sender === props.username ? { 'margin-left': 'auto' } : {}
       }
       className={
        !message.sender ? 'general-message-container' : 'message-container'
       }
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
  </div>
 );
}

export default Messages;
