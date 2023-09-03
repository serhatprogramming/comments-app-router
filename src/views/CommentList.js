import Comment from "../components/Comment";
import CommentForm from "../components/CommentForm";

const CommentList = () => {
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
      <h2>Comments</h2>
      {comments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
      <CommentForm />
    </div>
  );
};

export default CommentList;
