import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.usersList.map((user) => (
          <div key={user.id}>
            <li>
              {user.name} ({user.age} years old)
            </li>
          </div>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
