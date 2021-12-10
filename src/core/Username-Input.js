import { useRef } from 'react';
import { Link } from 'react-router-dom';

function UsernameInput(props) {
 const inputUsername = useRef(null);

 return (
  <div className={'username-input-container'}>
   <input
    className={'username-input'}
    placeholder={'Username: '}
    ref={inputUsername}
    name="usernameInput"
    type="text"
   />
   <label className={'input-label'} htmlFor="usernameInput">
    Username:
   </label>
   <button
    className={'login-btn'}
    onClick={() => props.setUsername(inputUsername.current.value)}
   >
    <Link
     className={'link'}
     to={{
      pathname: '/home',
     }}
    >
     Login
    </Link>
   </button>
  </div>
 );
}

export default UsernameInput;
