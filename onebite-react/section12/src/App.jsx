import "./App.css";
import { useReducer, useRef, createContext } from "react";
import { Routes, Route } from "react-router-dom";

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

const mockData = [
  {
    id: 1,
    createdDate: new Date("2026-03-25").getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date("2026-03-24").getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
  {
    id: 3,
    createdDate: new Date("2026-02-24").getTime(),
    emotionId: 3,
    content: "3번 일기 내용",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) => (String(item.id) === String(action.data.id) ? action.data : item));
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.data.id));
    default:
      return state;
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    // 새로운 일기를 추가하는 기능
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      data: {
        id,
      },
    });
  };

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}
        >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<New />} />
            <Route path='/diary/:id' element={<Diary />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='*' element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
