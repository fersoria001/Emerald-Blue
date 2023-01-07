import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";



export const Login = () => {
  const [username, setUsername]= useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${username}, ${password}`);
    navigate('/vender');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button> Log In </button>
    </form>
  );
};
