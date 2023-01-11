import React from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { getUsers, deleteUser, updateUser } from "../../services/userService";


export default function UsersList() {
  const queryClient = useQueryClient();
  const {
    isLoading,
    data: users, // en este caso es un alias
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers, //parece q si o si debe ser una arrow function o llamada sin ()
    select: (users) => users.sort((a, b) => b.id - a.id),
  });
  
  const deleteUserMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });

  const updateUserMutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });

  if (isLoading) return <div> Loading ...</div>;
  else if (isError) return <div> Error : {error.message} </div>;

  return (
    <><h3 className="text-center"> Lista de Usuarios </h3>
    <div className="container-fluid mx-auto">
    <table className="table">
    <thead>
      <tr key={"header"}>
        {Object.keys(users[0]).map((key) => (
          <th scope="col">{key}</th>
        ))}
      </tr>
      </thead>
      <tbody>
      {users.map((user) => (
        <tr key={user.id}>
          {Object.values(user).map((val) => (
            <td>{val}</td>
          ))}
        </tr>
      ))}
      </tbody>
    </table>
    </div>
    </>
  );
}
