const box = document.querySelector("#box");

box.addEventListener("click", (event) => {
  console.log(`${event.pageX}', '${event.pageY}`);
});
