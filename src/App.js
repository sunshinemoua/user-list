import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (usersName, usersAge) => {
    setUsersList((prev) => {
      return [
        ...prev,
        { name: usersName, age: usersAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <React.Fragment>
      <AddUser addUserHandler={addUserHandler} />
      <UsersList usersList={usersList} />
    </React.Fragment>
  );
}

export default App;
