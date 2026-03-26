function filterRanking(players, minScore) {
  let found = false;

  for (let i = 0; i < players.length; i++) {
    if (players[i].score >= minScore) {
      console.log(`${i + 1}등 - ${players[i].nickname} (${players[i].score}점)`);
      found = true;
    }
  }

  if (!found) {
    console.log("조건에 맞는 플레이어가 없습니다.");
  }
}

filterRanking(
  [
    { nickname: "ProGamer", score: 950 },
    { nickname: "Noob123", score: 120 },
    { nickname: "SilverFox", score: 730 },
    { nickname: "GoldKing", score: 880 },
    { nickname: "BronzeHero", score: 310 },
  ],
  700,
);

filterRanking(
  [
    { nickname: "Newbie1", score: 50 },
    { nickname: "Newbie2", score: 30 },
  ],
  500,
);
