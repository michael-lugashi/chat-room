import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import '../styles/Chat.css';
function Chat(props) {
 //  const messageHistory = [];
 const [messages, setMessages] = useState([]);
 const [users, setUsers] = useState({});
 const inputEl = useRef(null);
 //  const updateMessages = (mes) => {
 // //   debugger;
 //   console.log(messages);
 //   const newMessages = [...messages];
 //   newMessages.push(mes);
 //   setMessages(newMessages);
 //  };
 const redirect = () => {
  document.removeEventListener('load', redirect);
  window.location.pathname = '/';
 };

 useEffect(() => {
  //   debugger;
  window.addEventListener('load', redirect);
  console.log('chat' + props.username);
  if (props.username) {
   const chat = new EventSource(
    `http://localhost:3000/chat/login/${props.username}`
   );
   chat.onmessage = (e) => {
    // e.preventDefault();
    // console.log(e);
    // debugger;
    // let copiedPerson = Object.assign({}, e);
    // const newMessages = [...messages];
    // newMessages.push(e.data);
    console.log(e);
    setMessages(JSON.parse(e.data));
   };
   chat.addEventListener('userChange', (e) => {
    console.log('change');
    console.log(JSON.parse(e.data));
    setUsers(JSON.parse(e.data));
   });
  }
  console.log('login: ' + props.username);
 }, []);
 //  useEffect(() => {
 //   console.log('refreshed');
 //  }, []);
 return (
  <div className="chat-page">
   <div className={'chat'}>
    <h1>Chat Room</h1>
    {messages.map((message, i) => {
     return (
      <li key={i + message}>
       <span>{message.timestamp}</span>
       <span>{message.sender}</span>
       <span>{message.text}</span>
      </li>
     );
    })}
   </div>
   <form className="chat-input">
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
     Send
    </button>
   </form>

   <div className={'users'}>
    {Object.values(users).map((user) => {
     return <li>{user}</li>;
    })}
    {/* {users.map(user=>{
      return <h2>user</h2>
    })} */}
   </div>
  </div>
 );
}

export default Chat;
