import Comment from "../components/Comment";

const CommentList = ({ comments }) => {
  return (
    <div>
      <h2>Comments</h2>
      {comments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </div>
  );
};

export default CommentList;
