import React from "react";
import { useResources } from "./useResources";

const UserList = () => {
  const users = useResources("users");
  return (
    <ul className="collection">
      {users.map(user => (
        <li key={user.id} className="user.titld">
          {user.name}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
