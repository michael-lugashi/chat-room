import { useEffect, useState } from 'react';
import '../styles/Chat.css';
import Messages from './Messages';
import SendMessages from './Send-Message';
import Users from './Users';

function Chat(props) {
 const [messages, setMessages] = useState([]);
 const [users, setUsers] = useState({});

 const redirect = () => {
  document.removeEventListener('load', redirect);
  window.location.pathname = '/';
 };

 useEffect(() => {
  window.addEventListener('load', redirect);
  if (props.username) {
   const chat = new EventSource(
    `http://localhost:3000/chat/login/${props.username}`
   );
   chat.onmessage = (e) => {
    setMessages(JSON.parse(e.data));
   };
   chat.addEventListener('userChange', (e) => {
    setUsers(JSON.parse(e.data));
   });
  }
  //   window.scrollTo(0, document.querySelector('.chat').scrollHeight);
 }, []);
 useEffect(() => {
     try {
      document.querySelector('#last').scrollIntoView({ behavior: 'smooth' });
  } catch (error) {}
 });

 return (
  <div className="chat-page">
   <Messages messages={messages} />
   <SendMessages username={props.username} />
   <Users users={users} />
  </div>
 );
}

export default Chat;
