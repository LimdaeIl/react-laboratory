import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import Clock from './chapter_04/Clock'
import Comment from './chapter_05/Comment'
import NotificationList from './chapter_06/NotificationList'

const root = createRoot(document.getElementById('root'));

setInterval(() => {
  root.render(
    // <StrictMode>
      <NotificationList />
    // </StrictMode>
  );
}, 1000);