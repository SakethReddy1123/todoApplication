import logo from './logo.svg';
import './App.css';
import LoginFrom from './components/Login';
import { useState } from 'react';

function App() {
 const[islogin,setIsLogin] =  useState(false)
  return(
    <LoginFrom/>
  )
  
}

export default App;
