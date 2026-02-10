// 1. 함수 표현식
function funcA() {
  // console.log("funcA");
}

let varA = funcA;
varA();

// console.log(varA);

let varB = function () {
  // console.log("funB");
};

// varB();

// console.log(varB);

// 2. 화살표 함수
let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));

let varD = () => 1;
console.log(varD);
