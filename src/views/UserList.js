import User from "../components/User";
import { Link } from "react-router-dom";

const UserList = () => {
  const users = [
    { id: 1, name: "John Doe", username: "johndoe123", numberOfComments: 42 },
    {
      id: 2,
      name: "Jane Smith",
      username: "janesmith456",
      numberOfComments: 58,
    },
    { id: 3, name: "Alice Johnson", username: "alicej", numberOfComments: 27 },
    { id: 4, name: "Bob Brown", username: "bobbrown", numberOfComments: 35 },
    { id: 5, name: "Ella Davis", username: "ellad", numberOfComments: 62 },
  ];
  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <Link to={`/user/${user.id}`} key={user.id}>
          <User user={user} />
        </Link>
      ))}
    </div>
  );
};

export default UserList;
