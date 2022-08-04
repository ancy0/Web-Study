const Author = () => {
  return (
    <div className="Author">
      <button className="profile">profile</button>
      <span className="user">Cha</span>
      <span className="follow">&#183; 팔로잉</span>
      <button className="more" style={{ float: "right" }}>
        more
      </button>
    </div>
  );
};

export default Author;
