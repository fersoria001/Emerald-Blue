import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";



export const Login = () => {
  const [username, setUsername]= useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {login, isLogged} = useUser();

  useEffect(() => {
    if(isLogged) navigate('/vender') 
  }, [isLogged, navigate])
  

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password })
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
