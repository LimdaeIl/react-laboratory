import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Diary from "./pages/Diary";
import Home from "./pages/Home";
import New from "./pages/New";
import Notfound from "./pages/Notfound";
import Edit from "./pages/Edit.jsx";

// 1. "/": 모든 일기를 조회하는 Home 페이지
// 2. "/new": 새로운 일기를 작성하는 New 페이지
// 3. "/diary": 일기를 상세히 조회하는 Diary 페이지
// <Routes> 안에는 <Route> 만 작성할 수 있다!
// Link 태그는 a 태그를 대체하는 라우터 dom 기능입니다. 단, 어떠한 새로고침도 발생하지 않아요. 훨씬 좋아요.
// useNavigate 으로 버튼 onClick 동작으로 이동하게 만들 수 있습니다.
// vite에 의해 자동으로 이미지를 최적화하기 위햐서 assets 안에 넣어야 합니다.
// npm run build 를 수행하면 번들링되어 있습니다. npm run preview 로 실행할 수 있습니다.
// npm run preview는 4173 으로 실행됩니다. public 이미지들의 주소는 /emotion2.png 인 반면에,
// img 태그의 src 속성으로 가져오는 이미지 경로의 주소는 캐시 이미지명으로 됩니다.

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
