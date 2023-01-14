import React from "react";
import { createUser } from "../../services/userService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
export function UserForm() {
  const addUserMutation = useMutation({
    mutationFn: createUser, //crea la funcion debe ser invocada luego
    onSuccess: () => {
      queryClient.invalidateQueries("users"); //invalidar la anterior y volver a listar
    },
  });

  const queryClient = useQueryClient();

  function handleSubmit(e) {
    e.preventDefault(e);
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData);
    console.log(user);
    addUserMutation.mutate({
      ...user,
    });
  }
  return (
    <form
      onSubmit={handleSubmit}
      className=""
      style={{ width: "60vh", height: "60vh" }}
    >
      <p className="text-center"> CREA TU USUARIO </p>
      <div className="row">
        <div className="col">
          <div className="form-outline">
            <input type="text" id="name" className="form-control" name="name" />
            <label className="form-label" htmlFor="name">
              {" "}
              Nombre{" "}
            </label>
          </div>
        </div>
        <div className="col">
          <div className="form-outline">
            <input
              type="text"
              id="surname"
              className="form-control"
              name="surname"
            />
            <label className="form-label" htmlFor="surname">
              Apellido
            </label>
          </div>
        </div>
      </div>

      <div className="form-outline">
        <input type="email" id="email" className="form-control" name="email" />
        <label className="form-label" htmlFor="email">
Correo electronico
        </label>
      </div>

      <div className="form-outline">
        <input
          type="password"
          id="password"
          className="form-control"
          name="password"
        />
        <label className="form-label" htmlFor="password">
          Contraseña
        </label>
      </div>

      <div className="form-outline">
        <input
          type="password"
          id="password"
          className="form-control"
          name="password"
        />
        <label className="form-label" htmlFor="password">
          Confirmar contraseña
        </label>
      </div>
      <div className="container text-center">
        <button type="submit" className="btn btn-outline-dark">
        <Link to="/usuario_creado_con_exito" className="text-decoration-none text-white"> Crear Cuenta </Link>
           
        </button>
      </div>
    </form>
  );
}
