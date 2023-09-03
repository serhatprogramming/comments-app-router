const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    console.log("username: ", event.target.username.value);
    console.log("password: ", event.target.password.value);
    event.target.username.value = "";
    event.target.password.value = "";
  };

  return (
    <div>
      <h3>Login to Comments Application</h3>
      <form onSubmit={handleLogin}>
        Username: <input type="text" name="username" />
        Password: <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
