import { useRef, useState } from "react";

const CommentItem = ({ onEdit, onRemove, content, created_date, id }) => {
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef();
  const handleRemove = () => {
    if (window.confirm("댓글을 삭제하시겠습니까?")) {
      onRemove(id);
    }
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  const handleEdit = () => {
    if (localContent.length < 1) {
      localContentInput.current.focus();
      return;
    }

    if (window.confirm("댓글을 수정하시겠습니까?")) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };

  return (
    <div className="CommentItem">
      <div className="content">
        <button className="profile">profile</button>
        <span className="user">aa</span>
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
              wrap="hard"
            />
          </>
        ) : (
          <>{content}</>
        )}
        <button className="smallHeart" style={{ marginRight: 0 }}>
          heart
        </button>
      </div>
      <span className="date">{new Date(created_date).toLocaleString()}</span>

      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>수정취소</button>
          <button onClick={handleEdit}>수정완료</button>
        </>
      ) : (
        <>
          <button onClick={handleRemove}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};

export default CommentItem;
