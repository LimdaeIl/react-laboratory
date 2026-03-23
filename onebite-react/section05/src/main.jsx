import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const Hello = () => {
  return <div>hello</div>
}

// <Hello /> 하면 루트 컴포넌트가 Hello 컴포넌트로 변경된다..!
// 관례상 App 으로 루트 컴포넌트를 설정한다.
createRoot(document.getElementById('root')).render(
    <App />
);
