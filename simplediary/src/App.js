import React, {
  useReducer,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
//import OptimizeTest from "./OptimizeTest";

//https://jsonplaceholder.typicode.com/comments

// const dummyList = [
//   {
//     id:1,
//     author:"안채영",
//     content:"하이 1",
//     emotion:5,
//     created_date:new Date().getTime()
//   },
//   {
//     id:2,
//     author:"안기현",
//     content:"하이 4",
//     emotion:5,
//     created_date:new Date().getTime()
//   },
//   {
//     id:3,
//     author:"안중경",
//     content:"하이 2",
//     emotion:5,
//     created_date:new Date().getTime()
//   },
//   {
//     id:4,
//     author:"안",
//     content:"하이 3",
//     emotion:5,
//     created_date:new Date().getTime()
//   },
// ];

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }

    case "CREATE": {
      const created_date = new Date().getTime();
      const newItem = { ...action.data, created_date };
      return [newItem, ...state];
    }

    case "REMOVE": {
      return state.filter((it) => it.id !== action.targetId);
    }

    case "EDIT": {
      return state.map((it) =>
        it.id === action.targetId ? { ...it, content: action.newContent } : it
      );
    }

    default:
      return state;
  }
};

const App = () => {
  //const [data, setData] = useState([]);
  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);

  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });

    //setData(initData);
    dispatch({ type: "INIT", data: initData });
  };

  useEffect(() => {
    getData();
  }, []);

  const onCreate = useCallback((author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    //setData((data) => [newItem, ...data]);
  }, []);

  const onRemove = useCallback((targetId) => {
    //setData((data) => data.filter((it) => it.id !== targetId));
    dispatch({ type: "REMOVE", targetId });
  }, []);

  const onEdit = useCallback((targetId, newContent) => {
    // setData((data) =>
    //   data.map((it) =>
    //     it.id === targetId ? { ...it, content: newContent } : it
    //   )
    // );
    dispatch({ type: "EDIT", targetId, newContent });
  }, []);

  const getDiaryAnalysis = useMemo(() => {
    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

  return (
    <div className="App">
      {/* <OptimizeTest /> */}
      <DiaryEditor onCreate={onCreate} />
      <div>전체 일기 : {data.length}</div>
      <div>기분좋은 일기 개수 : {goodCount}</div>
      <div>기분나쁜 일기 개수 : {badCount}</div>
      <div>기분좋은 일기 비율 : {goodRatio}</div>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
};
export default App;
