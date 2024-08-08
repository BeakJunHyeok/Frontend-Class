//   const liItem = document.createElement("li");

//   liItem.innerHTML = `${title.value} - ${author.value} <span>삭제</span>`;

//   bookList.appendChild(liItem);

const name = document.querySelector("#name");
const study = document.querySelector("#study");
const form = document.querySelector("form");
const table = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault;

  const tdItem = document.createElement("li");
  tdItem.innerHTML = `${name.value} - ${study.value}`;

  table.appendChild(tdItem);
  name.value = "";
  study.value = "";
});
