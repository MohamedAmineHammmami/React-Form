import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField.jsx";

function App() {
  const [input, setInput] = useState("");
  console.log(input);

  return (
    <div className="app">
      <h1 className="header">Register Login Widget</h1>
      <div className="container">
        <div className="loginContainer">
          <h1 className="loginHeader">Login</h1>
          <form className="loginForm">
            <InputField
              name="Username"
              type="text"
              inputFn={setInput}
              pattern="^[a-zA-Z0-9._]{3,20}$"
            />
            <InputField
              name="Password"
              type="password"
              inputFn={setInput}
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            />
            <button>Login</button>
          </form>
        </div>
        <div className="registerContainer">
          <h1 className="registerHeader">Register</h1>
          <form className="registerForm">
            <InputField
              name="Username"
              type="text"
              inputFn={setInput}
              pattern="^[a-zA-Z0-9._]{3,20}$"
            />
            <InputField
              name="Email"
              type="email"
              inputFn={setInput}
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            />
            <InputField
              name="Password"
              type="password"
              inputFn={setInput}
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            />
            <InputField
              name="ConfirmPassword"
              type="password"
              inputFn={setInput}
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
