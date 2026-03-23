import { useParams } from "react-router-dom";

// useParams는 파라미터를 가져오는 리액트 돔의 기능입니다.
const Diary = () => {
  const params = useParams();
  console.log(params);
  return <div>{params.id}번 일기입니다.</div>;
};

export default Diary;
