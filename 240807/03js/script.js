// 1. 각 텍스트에 마우스를 올린다.
// 2. 텍스트에 마우스가 올라갈 때마다 이미지가 변경된다
// 3. 텍스트에서 마우슥 떠나면 원래 상태로 돌아온다.

const photo = document.querySelector(".photo");
const liItems = document.querySelectorAll("li");

liItems.forEach((liItem, index) => {
  liItem.addEventListener("mouseover", function () {
    let changeImage = this.getAttribute("data-image");
    photo.style.backgroundImage = `url("${changeImage}")`;
  });

  liItem.addEventListener("mouseleave", function () {
    photo.style.backgroundImage = ``;
  });
});
