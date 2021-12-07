import axios from 'axios';
import { useRef } from 'react';

function SendMessages(props) {
 const inputEl = useRef(null);

 return (
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
      console.log(sendMessage)
     } catch (error) {
      console.log(error);
     }
     console.log('sent message');
    }}
   >
    Send
   </button>
  </form>
 );
}

export default SendMessages;
