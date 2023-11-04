import FormInput from "./FormInput";
import { useState } from "react";
import App from "../App.css";
function Todo() {
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
    </div>
  );
}

export default Todo;
