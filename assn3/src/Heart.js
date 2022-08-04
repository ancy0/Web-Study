import React, { useState } from "react";

const Heart = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);
  const [isClick, setIsClick] = useState(false);
  const toggleIsClick = () => {
    setCount(count + 1);
    setIsClick(!isClick);
  };

  const onIncrease = () => {
    setCount(count + 1);
  };
  return (
    <div className="Heart">
      <div>
        {isClick ? (
          <>
            <button id="heartBtn1" onClick={onIncrease}>
              heart
            </button>
          </>
        ) : (
          <>
            <button id="heartBtn2" onClick={toggleIsClick}>
              !heart
            </button>
          </>
        )}
        <button id="commentBtn">comment</button>
        <button id="shareBtn">share</button>
        <button id="tagBtn" style={{ float: "right" }}>
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
