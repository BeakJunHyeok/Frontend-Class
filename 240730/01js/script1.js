//사용자에게 화씨온도를 받아서 콘솔창에서 해당 온도를 섭씨온도로 변환했을떄의 값을 출력해주세요.
// 섭씨온도 = (화씨온도 - 32) / 1.8

const Ftem = prompt("화씨온도를 입력하세요");
const am = parseFloat(Ftem);
const Ctem = ((am - 32) / 1.8).toFixed(2);
console.log(Ctem);

// const fah = parseFloat(prompt("화씨온도를 입력하세요!", "ex. 45"));
// const cel = (fah - 32) / 1.8;
// console.log(cel);

alert(`화씨온도 ${Ftem}도는 섭씨온도 ${Ctem}도입니다!`);
