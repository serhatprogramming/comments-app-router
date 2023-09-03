import { useParams } from "react-router-dom";

const UserDetails = ({ users }) => {
  const id = useParams().id;
  const user = users.find((user) => user.id === Number(id));

  if (!user) {
    return null;
  }

  return (
    <div>
      <h2>Account details</h2>
      <div>Name: {user.name}</div>
      <div>Username: {user.username}</div>
      <div>Number of Comments: {user.numberOfComments}</div>
    </div>
  );
};

export default UserDetails;
