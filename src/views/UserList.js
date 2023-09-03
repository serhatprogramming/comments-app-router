import User from "../components/User";

const UserList = ({ users }) => {
  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
