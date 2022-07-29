import CommentItem from "./CommentItem";

const CommentList = ({ onEdit, onRemove, commentList }) => {
  return (
    <div className="CommentList">
      <div className="postText">
        <button className="profile">profile</button>
        <span className="user">Cha</span>
        <span>
          신촌 현대백화점에서 찍은 익명이 사진 + 댓글 달기, 수정, 삭제, 좋아요
          클릭 과제 (❁´▽`❁)
        </span>
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
};

export default CommentList;
