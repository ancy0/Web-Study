import React, {useState} from "react";

const Counter = ({initialValue}) => {
    const [count, setCount] = useState(initialValue);

    const onIncrease =() => {
        setCount(count + 1);
    };

    const onDecrease =() => {
        setCount(count - 1);
    };

    const onReset =() => {
        setCount(0);
    };

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>증가</button>
            <button onClick={onDecrease}>감소</button>
            <button onClick={onReset}>리셋</button>
        </div>

    );
};

Counter.defaultProps = {
    initialValue: 0,
}

export default Counter;