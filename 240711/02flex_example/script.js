const btn = document.querySelector(".mobile_gnb");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e);
  document.body.classList.toggle("mobile_page");
});
