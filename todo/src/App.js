import logo from './logo.svg';
import './App.css';
import LoginFrom from './compontes/Login';
import { useState } from 'react';

function App() {
 const[islogin,setIsLogin] =  useState(false)
  return (
    <div className="App">
      <LoginFrom/>
    </div>
  );
}

export default App;
