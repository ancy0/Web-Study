import CommentItem from "./CommentItem";

const CommentList = ({ onEdit, onRemove, commentList }) => {
  return (
    <div className="CommentList">
      <div className="postText">
        <button className="profile">profile</button>
        <span className="user">Cha</span>
        <span>
          신촌 현대백화점에서 발견!! 내 최애 이모티콘 익명이! 깨꾹이??도 처음
          봤는데 둘다 얼마나 귀여운지 (❁´▽`❁)*✲ﾟ*
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
