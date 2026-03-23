import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

// useSearchParams 쿼리 스트링을 처리할 떄 사용하는 리액트 돔이 있습니다.
const Home = () => {
  return (
    <div>
      <Header title={"2024년 2월"} leftChild={<Button text={"<"} />} rightChild={<Button text={">"} />} />
      <DiaryList />
    </div>
  );
};

export default Home;
