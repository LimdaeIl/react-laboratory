function getOrderSummary(orders) {
  const filtered = orders.filter((orders) => orders.status === "completed");

  const summary = filtered.map((order) => {
    const totalPrice = order.price * order.quantity;
    return `${order.menu} - ${order.quantity}개 (총${totalPrice}원)`;
  });
  return summary;
}

const result = getOrderSummary([
  { menu: "아메리카노", price: 3000, quantity: 2, status: "completed" },
  { menu: "카페라떼", price: 3500, quantity: 1, status: "cancelled" },
  { menu: "크로와상", price: 2800, quantity: 3, status: "completed" },
  { menu: "케이크", price: 5000, quantity: 1, status: "completed" },
  { menu: "녹차라떼", price: 4000, quantity: 2, status: "cancelled" },
]);

console.log(result);

// 출력 결과 :
// ["아메리카노 - 2개 (총 6000원)", "크로와상 - 3개 (총 8400원)", "케이크 - 1개 (총 5000원)"]
