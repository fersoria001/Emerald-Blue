import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
import "../../styles/login.css"


export const Login = () => {
  const [username, setUsername]= useState("");
  const [password, setPassword] = useState("");

  const {login, isLogged} = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if(isLogged) navigate('/vender')
  }, [isLogged, navigate])
  

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password })
    console.log(username, password, isLogged)
  };
  console.log(isLogged)
  return (
    <form className="log-in">
    <label htmlFor="username">Ingresa con tu usuario</label>
      <input
      id="username"
      className="form-control-sm"
        type="text"
        placeholder="Usuario"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <label htmlFor="password">Poné tu contraseña</label>
      <input
      id="password"
      className="form-control-sm"
        type="password"
        placeholder="Contraseña"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <div className="mt-2">
      <button type='submit'className="btn btn-outline-dark" onClick={handleSubmit}>Ingresar</button>
      </div>

    </form>
  );
};
