const Post = () => {
  return (
    <div
      className="postImg"
      style={{
        marginTop: 30,
        marginLeft: 190,
        padding: 0,
        width: 450,
        alignContent: "center",
        border: "1px solid gray",
        backgroundColor: "black",
      }}
    >
      <img src="/postImg.jpg" width="100%" alt="post" />
    </div>
  );
};

export default Post;
