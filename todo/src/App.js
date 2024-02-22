import logo from './logo.svg';
import './App.css';
import LoginFrom from './components/Login';
import { Fragment, useState } from 'react';
import Todo from './components/Todo';

function App() {
 const[islogin,setIsLogin] =  useState(false)
  return (
    <Fragment>
      <h1>Hello</h1>
      {!islogin && <LoginFrom setIsLogin={setIsLogin} />}
      {islogin && <Todo setIsLogin={setIsLogin} />}
    </Fragment>
  );
  
}

export default App;
