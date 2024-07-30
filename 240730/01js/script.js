// window.addEventListener("DOMContentLoaded", () => {});

// const num01 = 1;
// const Num01 = 2;
// 변수명 선언 시, 유의사항
// 변수명으로 예약어 사용불가!
// document, window, location 등
// $, _, 영문자 => 변수명 첫단어 가능!!
// 단, 변수명 중간 혹은 마지막에는 숫자 가능
// 변수명은 반드시 대,소문자를 가림

// 변수명선언시 3가지 방식 중 1개
// 1) 카멜표기법 : 낙타
// const numberSum = 3;
// 2) 스네이크 표기법 : 뱀
// const number_sum = 10;
// 3) 헝가리안 표기법 : 첫단어 대문자!
// const Number = 4;
// class선언 => 객체!!!

// const boolean = true;
// console.log(typeof boolean);

// const test01 = null;
// // 유효하지 않은 값
// const test02 = undefined;
// // undefined => 미정 값

// const name = "현빈";
// const classroom = 201;
// console.log(name + "님" + classroom + "호 강의실로 오세요!");
// console.log(`${name}님 ${classroom}호 강의실로 오세요!`);

// const jsBook = {
//   // 속성 : property
//   // key : value
//   title: "지옥에서온 깃허브",
//   pages: 330,
// };
// // 객체안에 담긴 값을 찾아올 수 있음
// // 온점 표기법
// const jsbookTitle = jsBook.title;
// console.log(jsbookTitle);
// // 대괄호 표기법
// const jsBookPages = jsBook["pages"];
// console.log(jsBookPages);

// jsBook.title = "천국에서온 깃허브";
// console.log(jsBook);

// // 배열
// const arr = ["red", "green", "blue"];
// console.log(arr[0]);

// 심벌
// let test01 = Symbol();
// let test02 = Symbol();
// console.log(test01 === test02);

// let id = Symbol("userId");
// const member = {
//   name: "David",
//   [id]: 12345,
// };

// console.log(member);

//함수
// const fncTest = () => {
//   console.log("click");
// };

// let a = 10;
// let b = a;

// let obj1 = {
//   c: 10,
//   d: "ddd",
// };

// let obj2 = obj1;

// b = 15;
// obj2.c = 20;
// console.log(a, b);
// console.log(obj1, obj2);

// const fruits = ["apple", "banana", "cherry"];
// const favorite = [...fruits];

// favorite[1] = "grape";
// console.log(fruits);

// 형변환
// console.log(parseFloat("36.4"));

// console.log(Boolean(0));

const number = prompt("자연수를 입력해주세요!");
console.log(number);
