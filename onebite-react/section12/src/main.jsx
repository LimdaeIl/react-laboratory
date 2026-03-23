import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  // BrowserRouter 는 모든 주소의 변화를 감지할 수 있습니다.
  // 아래처럼 감싸주면 모든 컴포넌트들이 모든 데이터를 공급 받아서 사용할 수 있습니다.
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
