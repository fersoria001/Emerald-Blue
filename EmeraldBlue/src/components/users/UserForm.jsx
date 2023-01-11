import React from "react";
import { createUser } from "../../services/userService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
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
<form onSubmit={handleSubmit}>
  <div className="row mb-4">
    <div className="col">
      <div className="form-outline">
        <input type="text" id="name" className="form-control" name="name" />
        <label className="form-label" htmlFor="name">First name</label>
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <input type="text" id="surname" className="form-control" name="surname" />
        <label className="form-label" htmlFor="surname">Last name</label>
      </div>
    </div>
  </div>


  <div className="form-outline mb-4">
    <input type="email" id="email" className="form-control" name="email" />
    <label className="form-label" htmlFor="email">Email address</label>
  </div>

  <div className="form-outline mb-4">
    <input type="password" id="password" className="form-control" name="password" />
    <label className="form-label" htmlFor="password">Password</label>
  </div>
  <div className="container text-center">
  <button type="submit" className="btn btn-primary btn-block mb-4">Sign up</button>
</div>
</form>
  );
}
