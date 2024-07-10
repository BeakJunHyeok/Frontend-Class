const femaleBtn = document.getElementById("femalebtn");
const maleBtn = document.getElementById("malebtn");

femaleBtn.addEventListener("click", (event) => {
  event.preventDefault();
  femaleBtn.querySelector("i").classList.toggle("filledA");
  maleBtn.querySelector("i").classList.remove("filledB");
});

maleBtn.addEventListener("click", (event) => {
  event.preventDefault();
  maleBtn.querySelector("i").classList.toggle("filledB");
  femaleBtn.querySelector("i").classList.remove("filledA");
});
