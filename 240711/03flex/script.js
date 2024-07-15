// JS 변수 선언 var let const

const btn = document.querySelector(".trigger");
btn.addEventListener("click", function () {
  const gnb = document.querySelector(".gnb > ul");
  const sns = document.querySelector(".sns");
  gnb.classList.toggle("on");
  sns.classList.toggle("on");
  this.classList.toggle("active");
});
