import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import Post from "./Post";
import CommentEditor from "./CommentEditor";
import CommentList from "./CommentList";
import Heart from "./Heart";
import Author from "./Author";

function App() {
  const [postText, setPostText] = useState([]);
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  // const getPost = async () => {
  //   const ret = await fetch("https://jsonplaceholder.typicode.com/posts").then(
  //     (ret) => ret.json()
  //   );

  //   const initPost = ret.slice(0, 1).map((it) => {
  //     console.log(it.body);
  //     return {
  //       post: it.body,
  //     };
  //   });

  //   setPostText(initPost);
  // };
  // useEffect(() => {
  //   getPost();
  // }, []);
  // console.log(postText);

  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0, 5).map((it) => {
      return {
        author: it.email.split("@")[0],
        content: it.body,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });

    setData(initData);
  };

  useEffect(() => {
    getData();
  }, []);

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
              s
              // post={postText}
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
