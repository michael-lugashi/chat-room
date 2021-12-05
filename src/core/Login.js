// import axios from 'axios';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css'
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
   <h1 className={'login-heading'}>Chat Room Login</h1>
   <div className={'username-input-container'}
   // onSubmit={(e) => {
   //  e.preventDefault();
   //  debugger;
   //  props.setUsername(inputUsername.current.value);
   // }}
   >
    <input className={'username-input'} placeholder={'Username: '} ref={inputUsername} name="usernameInput" type="text" />
    <label className={'input-label'} htmlFor="usernameInput">Username: </label>
    <Link
     to={{
      pathname: '/home',
     }}
    >
    <button
    className={'login-btn'}
     onClick={() => props.setUsername(inputUsername.current.value)}
    //  value="submit"
    >
     Login
    </button>
    </Link>
   </div>
  </div>
 );
}

export default Login;
