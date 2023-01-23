import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { login } from "../../services/login_service";
import "../../styles/login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const { login, isLogged } = useUser();

  const navigate = useNavigate();
  useEffect(() => {
    if (isLogged) navigate("/vender");
  }, [isLogged, navigate]);

  async function iniciarSesion() {
    let datos = {
      "email": email,
      "password": password
  };
  
    const request = await fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(datos)
    })
    const respuesta = await request.text();
    if (respuesta != 'FAIL') {
      localStorage.token = respuesta;
      localStorage.email = datos.email;
    } else {
      alert("Las credenciales son incorrectas. Por favor intente nuevamente.");
    }
  
  
  }
    function handleSubmit(e){
      e.preventDefault();
      iniciarSesion();
      login(localStorage.getItem('token'))
      console.log(localStorage.getItem('token'));
    }
  

  return (
    <form className="log-in" >
      <label htmlFor="username">Ingresa con tu email</label>
     
      <input
        id="email"
        className="form-control-sm"
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
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
        <button
          type="submit"
          className="btn btn-outline-dark"
          onClick={(e)=>handleSubmit(e)}
        >
          Ingresar
        </button>
      </div>
    </form>
  );
};
