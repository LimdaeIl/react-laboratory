import { useSearchParams } from "react-router-dom";

// useSearchParams 쿼리 스트링을 처리할 떄 사용하는 리액트 돔이 있습니다.
const Home = () => {
  const [params, setParams] = useSearchParams();
  console.log(params.get("value"));
  console.log(setParams);

  return <div>Home</div>;
};

export default Home;
