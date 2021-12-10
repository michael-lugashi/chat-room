import axios from 'axios';
import { useRef } from 'react';
import swal from 'sweetalert';

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
     try {
      if (!inputEl.current.value) {
       throw new Error('Cannot send empty message!');
      }
      await axios.post('http://localhost:3000/send-message', {
       username: props.username,
       text: inputEl.current.value,
      });
      inputEl.current.value = '';
     } catch (err) {
      if (err.response) {
       swal('Oops!', err.response.data, 'error');
      } else {
       swal('Oops!', err.message, 'error');
      }
     }
    }}
   >
    📩
   </span>
  </form>
 );
}

export default SendMessages;
