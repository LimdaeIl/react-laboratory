// 1. 콜백함수
function main(value) {
  // console.log(1);
  // console.log(2);
  value();
  // console.log("end");
}

main(() => {
  // console.log("i am sub");
});

// 2. 콜백함수 활용
function repeat(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx);
  }
}

function repeatDouble(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 2);
  }
}

repeat(5);
repeatDouble(5);

// repeat, repeatDouble 처럼 중복 코드는 콜백 함수로 개선
function repeatCallback(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeatCallback(5, function (idx) {
  console.log(idx);
});

repeatCallback(5, function (idx) {
  console.log(idx * 2);
});

repeatCallback(5, function (idx) {
  console.log(idx * 3);
});

// 화살표 함수로 더 간결하게 표현
repeatCallback(5, (idx) => {
  console.log(idx);
});
