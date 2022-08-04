import CommentItem from "./CommentItem";

const CommentList = ({ post, onEdit, onRemove, commentList }) => {
  // console.log(post);
  return (
    <div className="CommentList">
      <div className="postText">
        <button className="profile">profile</button>
        <span className="user">Cha</span>
        <span>{post}</span>
      </div>
      <div>
        {commentList.map((it) => (
          <CommentItem
            key={it.id}
            {...it}
            onEdit={onEdit}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
};

CommentList.defaultProps = {
  commentList: [],
  post: [],
};

export default CommentList;
