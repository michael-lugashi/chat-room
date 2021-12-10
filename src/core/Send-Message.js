import axios from 'axios';
import { useRef } from 'react';

function SendMessages(props) {
 const inputEl = useRef(null);

 return (
  <form className="chat-input">
   <textarea
    ref={inputEl}
    className={'message-input'}
    name="messageInput"
    type="text"
   />
   <span
    className={'send-btn'}
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
     } catch (error) {
      console.log(error);
     }
     console.log('sent message');
    }}
   >
    <a href={'#last'}>📩</a>
   </span>
  </form>
 );
}

export default SendMessages;
