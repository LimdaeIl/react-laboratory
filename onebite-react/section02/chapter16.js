function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function countdown(seconds) {
  try {
    for (let i = seconds; i >= 1; i--) {
      console.log(i);
      await wait(1000);
    }
    console.log("🎉 타이머 종료!");
  } catch (error) {
    console.error(error);
  }
}

countdown(5);
// 출력 결과 : (1초 간격으로 출력)
// 5
// 4
// 3
// 2
// 1
// 🎉 타이머 종료!
