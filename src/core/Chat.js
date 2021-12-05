import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

function Chat(props) {
//  const messageHistory = [];
 const [messages, setMessages] = useState([]);
 const inputEl = useRef(null);
//  const updateMessages = (mes) => {
// //   debugger;
//   console.log(messages);
//   const newMessages = [...messages];
//   newMessages.push(mes);
//   setMessages(newMessages);
//  };


 useEffect(() => {
  debugger;
  console.log('chat' + props.username);
  if (props.username) {
   const chat = new EventSource(`http://localhost:3000/chat/login/${props.username}`);
   chat.onmessage = (e) => {
    // e.preventDefault();
    // console.log(e);
    // debugger;
    // let copiedPerson = Object.assign({}, e);
    const newMessages = [...messages];
    newMessages.push(e.data);
    setMessages(newMessages);
   };
  }
  console.log('login: ' + props.username);
 }, []);
//  useEffect(() => {
//   console.log('refreshed');
//  }, []);
 return (
  <div className="login-page">
   <h1>Chat Room</h1>
   <form>
    <label htmlFor="messageInput">Send Message:</label>
    <input ref={inputEl} name="messageInput" type="text" />
    <button
     onClick={async (e) => {
      e.preventDefault();
      try {
       console.log('try');
       const sendMessage = await axios.post(
        'http://localhost:3000/send-message',
        {
         username: props.username,
         text: inputEl.current.value,
        }
       );
       console.log(sendMessage);
       //    if (sendMessage.data.success) {
       //     const newMessages = [...messages];
       //     newMessages.push(sendMessage.data.text);
       //     debugger;
       //     setMessages`(newMessages)`;
       //    }
      } catch (error) {
       console.log(error);
       //   console.log(error.response.data);
      }
      console.log('sent message');
     }}
     //  value="submit"
    >
     Submit
    </button>
   </form>

   {messages.map((message, i) => {
    return <li key={i + message}>{message}</li>;
   })}
  </div>
 );
}

export default Chat;
