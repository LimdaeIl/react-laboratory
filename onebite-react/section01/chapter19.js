function printReceipt({ customer, items }) {
  const orderer = customer;
  const menu = items.length > 0 ? items[0] : "메뉴 없음";
  const count = items.length;

  console.log(`주문자 : ${orderer}`);
  console.log(`대표 메뉴 : ${menu}`);
  console.log(`총 수량 : ${count}잔`);
}

printReceipt({
  customer: "김효빈",
  items: ["아메리카노", "카페라떼", "바닐라라떼"],
});

printReceipt({
  customer: "이정환",
  items: [],
});
