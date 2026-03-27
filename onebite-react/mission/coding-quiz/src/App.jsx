import { createContext, useMemo, useReducer } from "react";
import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";
import { useRef } from "react";
import { useCallback } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "REMOVE":
      return state.filter((it) => it.id !== action.targetId);
    default:
      return state;
  }
};

/* 
1. Context 객체 생성
  - ContactStateContext : contacts State를 보관하고 공급함
  - ContactDispatchContext : onCreateContact, onRemoveContact 등의 contacts State를 변경시키는 함수들을 보관하고 공급함
*/
export const ContactStateContext = createContext();
export const ContactDispatchContext = createContext();

function App() {
  const [contacts, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  const onCreateContact = useCallback((name, contact) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        name,
        contact,
      },
    });
  }, []);

  const onRemoveContact = useCallback((targetId) => {
    dispatch({
      type: "REMOVE",
      targetId,
    });
  }, []);

  const memoizedDispatches = useMemo(() => ({ onCreateContact, onRemoveContact }), []);

  return (
    <div className='App'>
      <ContactStateContext.Provider value={contacts}>
        <ContactDispatchContext.Provider value={memoizedDispatches}>
          <h2>Contact List</h2>
          <section>
            <ContactEditor />
          </section>
          <section>
            <ContactList />
          </section>
        </ContactDispatchContext.Provider>
      </ContactStateContext.Provider>
    </div>
  );
}

export default App;
