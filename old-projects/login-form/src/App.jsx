import { useState } from 'react'
import './App.css'

function App() {
  const [showPassword, setShowPassword] = useState(false);

  function show() {
    setShowPassword(!showPassword);
  }

  return (
    <>
      <h1>Hello, Welcome to my website</h1>
      <div>
        <input type="email" placeholder="Email" />
      </div>
      <div>
        <input 
          type={showPassword ? "text" : "password"} 
          placeholder="Password" 
        />
        <button onClick={show}>{showPassword ? "Hide" : "Show"}</button>
      </div>
      <button className="btn">Login</button>
      <button className="btn">Sign up</button>
    </>
  );
}

export default App
