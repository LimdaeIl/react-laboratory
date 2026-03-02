let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

// 함수
function getArea(width, height) {
  let area = width * height;

  // 중첩 함수
  function another() {
    console.log("another");
  }

  another();
  return area;
}
