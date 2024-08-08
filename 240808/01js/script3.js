const userAnswer = prompt("언제 부터?", "2024-06-14");
const result = document.querySelector("#result");

const now = new Date();
const firstDay = new Date(userAnswer);

const passedTime = now.getTime() - firstDay.getTime();
const passedDate = Math.round(passedTime / (24 * 60 * 60 * 1000));

result.innerText = ` ${passedDate}`;
