import UserList from "./views/UserList";
import CommentList from "./views/CommentList";
import About from "./views/About";
import Footer from "./components/Footer";
import Login from "./views/Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserDetails from "./views/UserDetails";

const App = () => {
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
  const menuStyle = {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "200px",
  };
  return (
    <Router>
      <div>
        <div style={menuStyle}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/users">Users</Link>
          <Link to="/login">Login</Link>
        </div>
        <h1>Comment Application</h1>
        <Routes>
          <Route path="/" element={<CommentList />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/:id" element={<UserDetails users={users} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
