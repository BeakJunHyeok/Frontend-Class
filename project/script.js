// Home 텍스트 타이핑
const content = "Hello, I’m BeakJunHyeok!";
const text = document.querySelector(".title h1");
let textIdx = 0;

function typing() {
  let txt = content[textIdx++];

  text.innerHTML += txt;

  if (textIdx > content.length) {
    text.textContent = "";
    textIdx = 0;
  }
}

setInterval(typing, 200);

// favorite slide
const btns = document.querySelector(".controls");
const prevBtn = btns.querySelector(".prev");
const nextBtn = btns.querySelector(".next");

const slides = document.querySelector(".slides");
const slide = slides.querySelectorAll("li");

const slideCount = slide.length;
const slideWidth = 380;
const slideMargin = 10;

let currentIdx = 0;
// 복제한 5개의 li노드를 왼쪽으로 이동 시키기 위한 함수1
const updateWidth = () => {
  const currentSlides = document.querySelectorAll(".slides li");
  const newSlideCount = currentSlides.length;
  const newWidth = `${
    (slideWidth + slideMargin) * newSlideCount - slideMargin
  }px`;
  slides.style.width = newWidth;
};
//복제한 5개의 li노드를 왼쪽으로 이동 시키기 위한 함수2
const setInitialPos = () => {
  const initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
  slides.style.transform = `translateX(${initialTranslateValue}px)`;
};

// li 노드를 복제하기 위한 함수
const makeClone = () => {
  for (let i = 0; i < slideCount; i++) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.appendChild(cloneSlide);
  }
  for (let i = slideCount - 1; i >= 0; i--) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.prepend(cloneSlide);
  }
  updateWidth();
  setInitialPos();
  setTimeout(() => {
    slides.classList.add("animated");
  }, 100);
};

makeClone();

//버튼 클릭을 통해서 실제 슬라이드를 출력시켜주는 함수
const moveSlide = (num) => {
  slides.style.left = `${-num * (slideWidth + slideMargin)}px`;
  currentIdx = num;
  if (currentIdx === slideCount || currentIdx === -slideCount) {
    setTimeout(() => {
      slides.classList.remove("animated");
      slides.style.left = "0px";
      currentIdx = 0;
    }, 500);
    setTimeout(() => {
      slides.classList.add("animated");
    }, 600);
  }
};

//버튼 클릭 이벤트 함수
nextBtn.addEventListener("click", () => {
  moveSlide(currentIdx + 1);
});

prevBtn.addEventListener("click", () => {
  moveSlide(currentIdx - 1);
});

//자동슬라이드 및 정지함수
let timer = undefined;

const autoSlide = () => {
  if (timer === undefined) {
    timer = setInterval(() => {
      moveSlide(currentIdx + 1);
    }, 3000);
  }
};

autoSlide();

const stopSlide = () => {
  clearInterval(timer);
  timer = undefined;
};

slides.addEventListener("mouseenter", () => {
  stopSlide();
});

slides.addEventListener("mouseleave", () => {
  autoSlide();
});

btns.addEventListener("mouseenter", () => {
  stopSlide();
});

btns.addEventListener("mouseleave", () => {
  autoSlide();
});
