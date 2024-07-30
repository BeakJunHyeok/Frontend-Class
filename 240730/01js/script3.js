// 사용자로부터  3개의 값을 받으세요!!!
// 교통비, 식대, 음료비
// 위 3개의 값이 10000원을 초과한다면 "예산관리 잘해주세요!"
// 위3개의 값이 10,000원 이하이라면 "예산관리 잘하셨어요!""

// const travel = Number(prompt("교통비를 입력해주세요"));
// const eat = Number(prompt("식비를 입력해주세요"));
// const drink = Number(prompt("음료비를 입력해주세요."));

// const total = travel + eat + drink;
// let result = total < 10000 && total >= 10000;
// console.log(typeof total);
// result = result ? "예산관리를 잘해주세요" : "예산관리 잘하셨어요";

let arr = [];
for (let i = 0; i < 3; i++) {
  const userNum = Number(prompt("교통비,식대,음료비 순으로 입력"));
  arr.push(userNum);
}

const [traffic, food, drink] = arr;
const sum = traffic + food + drink;

if (isNaN(sum) || sum === 0) {
  alert("잘못입력했습니다!");
} else if (sum < 10000) {
  alert("예산관리 잘하셧습니다!");
} else {
  alert("예산관리 잘하쇼!");
}
