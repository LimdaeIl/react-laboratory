let o1 = { name: "이정환" };
let o2 = o1;
let o3 = { ...o1 };

// console.log(o1 === o2);
// console.log(o1 == o2);
// console.log(o1 === o3);

// 객체를 문자열로 변환하여 비교
// JSON.stringify 등의 내장 함수를 이용해야 함
console.log(JSON.stringify(o1) === JSON.stringify(o3));
console.log(JSON.stringify(o1) == JSON.stringify(o3));
