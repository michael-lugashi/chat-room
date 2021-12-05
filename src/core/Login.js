// import axios from 'axios';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
function Login(props) {
    const inputUsername = useRef(null);
    // let chat;
//  useEffect(() => {
//     debugger;
//     console.log('chat' + props.username);
//     if (props.username) {
//      chat = new EventSource(`http://localhost:3000/chat/login/${props.username}`);
//      chat.onmessage = (e) => {
//       // console.log(e);
//     //   updateMessages(e.data);
//      };
//     }
//   console.log('login: ' + props.username);
//  }, [props.username]);
 //  let username = username

 return (
  <div className="login-page">
   <h1>Chat Room Login</h1>
   <form
   // onSubmit={(e) => {
   //  e.preventDefault();
   //  debugger;
   //  props.setUsername(inputUsername.current.value);
   // }}
   >
    <label htmlFor="usernameInput">Username:</label>
    <input ref={inputUsername} name="usernameInput" type="text" />
    <Link
     to={{
      pathname: '/home',
     }}
    >
    <button
     onClick={() => props.setUsername(inputUsername.current.value)}
    //  value="submit"
    >
     Submit
    </button>
    </Link>
   </form>
  </div>
 );
}

export default Login;
