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
    <div className="container">
      <table className="table table-striped table-hover mt-5 shadow-lg">
        <thead>
          <tr className="text-white" style={{ background: "black" }}>
            <th>NAME</th>
            <th>LASTNAME</th>
            <th>EMAIL</th>
            <th>PASSWORD</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

