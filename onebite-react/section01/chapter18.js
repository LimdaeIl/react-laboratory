function calcTicketPrice(price, discountFn, memberName) {
  const discounted = discountFn ? discountFn(price) : null;
  const cost = discounted ?? price;
  const name = memberName || "비회원";
  return `${name} - 최종 가격 : ${cost} 원`;
}

calcTicketPrice(15000, (price) => price * 0.8, "김효빈");
calcTicketPrice(15000, null, "이정환");
calcTicketPrice(15000, (price) => price - 3000);
