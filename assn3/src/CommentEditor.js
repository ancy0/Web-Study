import { useRef, useState } from "react";

const CommentEditor = ({ onCreate }) => {
  //const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "",
    content: "",
  });

  //const [content, setContent] = useState("");
  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.content.length < 1) {
      contentInput.current.focus();
      return;
    }
    onCreate(state.content);
    setState({
      author: "",
      content: "",
    });
  };
  return (
    <div className="CommentEditor">
      <button className="emotion">smile</button>
      <textarea
        ref={contentInput}
        name="content"
        value={state.content}
        onChange={handleChangeState}
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
