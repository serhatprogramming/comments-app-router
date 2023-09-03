const CommentForm = () => {
  const handleCommentPost = (event) => {
    event.preventDefault();
    console.log("comment: ", event.target.comment.value);
    event.target.comment.value = "";
  };

  return (
    <div>
      <h3>Add a Comment</h3>
      <form onSubmit={handleCommentPost}>
        Comment: <input type="text" name="comment" />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};

export default CommentForm;
