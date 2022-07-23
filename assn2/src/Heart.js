import React, { useState } from "react";

const Heart = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);

  const onIncrease = () => {
    setCount(count + 1);
  };
  return (
    <div className="Heart">
      <div>
        <button className="heart" onClick={onIncrease}>
          heart
        </button>
        <button className="comment">comment</button>
        <button className="share">share</button>
        <button className="tag" style={{ float: "right" }}>
          tag
        </button>
      </div>

      <h4>좋아요 {count}개</h4>
    </div>
  );
};

Heart.defaultProps = {
  initialValue: 0,
};

export default Heart;
