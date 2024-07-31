// 자바 스크립트 for 문을 활용해서 구구단 2단~ 9단까지 웹브라우저 화면에 출력!!!

// 중첩 for 문
for (let i = 2; i < 10; i++) {
  for (j = 1; j < 10; j++) {
    let dan = i * j;
    document.write(`${i} * ${j} = ${dan} <br/>`);
  }
  document.write("<br/>");
}
