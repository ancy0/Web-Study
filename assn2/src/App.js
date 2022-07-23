import React, { useState, useRef } from "react";
import "./App.css";
import Post from "./Post";
import CommentEditor from "./CommentEditor";
import CommentList from "./CommentList";
import Heart from "./Heart";
import Author from "./Author";

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  const onCreate = (content) => {
    const created_date = new Date().getTime();
    const newItem = {
      content,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([...data, newItem]);
  };

  const onRemove = (targetId) => {
    const newCommentList = data.filter((it) => it.id !== targetId);
    setData(newCommentList);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };

  return (
    <div className="App">
      <div id="grid">
        <Post />
        <div
          className="postdetail"
          style={{
            marginTop: 30,
            padding: 10,
            width: 400,
            border: "1px solid lightgray",
            backgroundColor: "white",
            borderRadius: 5,
          }}
        >
          <Author />
          <div
            className="postComment"
            style={{
              height: "300px",
              overflow: "auto",
              scrollbarWidth: "0px",
              msOverflowStyle: "none",
            }}
          >
            <CommentList
              onEdit={onEdit}
              onRemove={onRemove}
              commentList={data}
            />
          </div>

          <Heart />
          <CommentEditor onCreate={onCreate} />
        </div>
      </div>
    </div>
  );
}

export default App;
