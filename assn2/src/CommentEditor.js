import { useRef, useState } from "react";

const CommentEditor = ({ onCreate }) => {
  const contentInput = useRef();
  const [content, setContent] = useState("");
  const handleSubmit = () => {
    if (content.length < 1) {
      contentInput.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };
  return (
    <div className="CommentEditor">
      <button className="emotion">smile</button>
      <textarea
        ref={contentInput}
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
        placeholder="댓글 달기..."
        style={{ border: "none", verticalAlign: "middle", resize: "none" }}
      />
      <button
        onClick={handleSubmit}
        style={{ border: "none", backgroundColor: "white", color: "blue" }}
      >
        게시
      </button>
    </div>
  );
};

export default CommentEditor;
