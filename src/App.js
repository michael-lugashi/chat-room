import './styles/App.css';
import Login from './core/Login';
import Chat from './core/Chat';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
 const [username, setUsername] = useState('');

 return (
  <div className="App">
   {/* <Login setUsername={setUsername} />
   <Chat username={username} /> */}
   <Router>
    <Routes>
     <Route exect path="/" element={ <Login setUsername={setUsername} />} />
     <Route exect path="/home" element={<Chat username={username} />} />
    </Routes>
   </Router>
  </div>
 );
}

export default App;
