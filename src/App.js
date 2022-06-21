import React, { useState } from "react";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function userNameHandler(e) {
    setUserName(e.target.value);
  }

  function passwordHandler(e) {
    setPassword(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    const credentials = {
      userName,
      password,
    };
    alert(
      `your credentials are username: '${credentials.userName}' and password: '${credentials.password}'`
    );
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type="text" onChange={userNameHandler}></input>
        <input type="text" onChange={passwordHandler}></input>
        <button type="submit">login</button>
      </form>
    </div>
  );
}

export default App;
