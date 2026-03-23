import { useState, useRef } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

let count = 0;

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) => {
    // countRef.current++;
    count++;
    console.log(count);
    console.log(e.target.name, e.target.value);

    setInput({
      ...input,
      [e.target.name]: e.target.value, // 대괄호를 열고 변수 이름을 쓴다면, 프로퍼티의 키로써 설정된다.
      // e.target.name 의 안에 있는 값들이 키가 되는 것이다.
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소 포커스
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input ref={inputRef} value={input.name} name='name' onChange={onChange} placeholder={"이름"} />
        {input.name}
      </div>
      <div>
        <input value={input.birth} name='birth' type='date' onChange={onChange} />
        {input.birth}
      </div>
      <div>
        <select value={input.country} name='country' onChange={onChange}>
          <option></option>
          <option value='kr'>한국</option>
          <option value='us'>미국</option>
          <option value='uk'>영국</option>
        </select>
        {input.country}
      </div>
      <div>
        <textarea value={input.bio} name='bio' onChange={onChange} />
        {input.bio}
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
