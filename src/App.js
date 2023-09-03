import UserList from "./views/UserList";
import CommentList from "./views/CommentList";
import About from "./views/About";
import Footer from "./components/Footer";
import Login from "./views/Login";
import CommentForm from "./components/CommentForm";

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

  const comments = [
    { id: 1, comment: "Great work on this project!", likes: 15, views: 102 },
    {
      id: 2,
      comment: "I have a question. Can you clarify this point?",
      likes: 8,
      views: 78,
    },
    { id: 3, comment: "Awesome, keep it up!", likes: 25, views: 210 },
    {
      id: 4,
      comment: "I found a typo in the second paragraph.",
      likes: 4,
      views: 45,
    },
    {
      id: 5,
      comment: "This is very informative. Thanks for sharing!",
      likes: 12,
      views: 135,
    },
  ];

  return (
    <div>
      <h1>Comment Application</h1>
      <CommentList comments={comments} />
      <CommentForm />
      <UserList users={users} />
      <About />
      <Login />
      <Footer />
    </div>
  );
};

export default App;
