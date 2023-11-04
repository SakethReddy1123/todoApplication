import FormInput from "./FormInput";
import { useState } from "react";
import App from "../App.css";
import Header from './Header'
function Todo({setIsLogin}) {
  const [state, setState] = useState("");
  const [userList, setUserList] = useState([]);
  const onChangeTodo = (event) => setState(event.target.value);
  const onAddItem = () =>
    setUserList((prev) => [...prev, { user: state, id: Math.random }]);

  return (
    <div className="container">
      <FormInput type="text" onChange={onChangeTodo}></FormInput>
      <button onClick={onAddItem}>Add</button>
      <ul>
        {userList.map((item) => (
          <li>{item.user}</li>
        ))}
      </ul>

      <Header setIsLogin = {setIsLogin}/>
    </div>
  );
}

export default Todo;
