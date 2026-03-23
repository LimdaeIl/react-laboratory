// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // new = 생성자 (기본값: 현재시각)
console.log(date1);

let date2 = new Date("1997-01-07");
console.log(date2);

let date3 = new Date("1997.01.07");
console.log(date3);

let date4 = new Date("1997 01 07");
console.log(date4);

let date5 = new Date("1997/01/07");
console.log(date5);

let date6 = new Date("1997/01/07:10:10");
console.log(date6);

let date7 = new Date(1997, 1, 7, 23, 59, 59);
console.log(date7);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
console.log(ts1);

// 3. 시간 요소도를을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth + 1;
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(30);

date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

console.log(date1);

// 5. 시간을 여러 포멧으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleString());


