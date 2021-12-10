import '../styles/Login.css';
import UsernameInput from './Username-Input';

function Login(props) {
 return (
  <div className="login-page">
   <h1 className={'login-heading'}>Chat Room Login</h1>
   <UsernameInput setUsername={props.setUsername} />
  </div>
 );
}

export default Login;
