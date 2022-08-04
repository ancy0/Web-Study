import { useParams } from "react-router-dom"; // custom hooks

const Diary = () => {
  const { id } = useParams(); // pathVariable = id (경로의 변수 담아서 전달)
  console.log(id); // id check (콘솔에 출력)

  return (
    <div>
      <h1>Diary</h1>
      <p>이곳은 다이어리 상세 페이지 입니다.</p>
    </div>
  );
};

export default Diary;
