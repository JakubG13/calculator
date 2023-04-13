const screen = document.querySelector(".calculator__screen");
const btns = [...document.querySelectorAll(".calculator__btn--normal")];
const marks = [...document.querySelectorAll(".calculator__btn--mark")];
const equal = document.querySelector(".calculator__btn--special5");
let number = "";
let firstNumber = 0;
let flag = true;
let markFlag = true;
let sign = 0;
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    screen.textContent += btn.textContent;
    number += btn.textContent;
  });
});

marks.forEach((mark) => {
  mark.addEventListener("click", () => {
    if (markFlag === true) {
      screen.textContent += mark.textContent;
      sign = mark.textContent;
      firstNumber = "";
      if (flag === true) {
        firstNumber = number;
        number = "";
        flag = false;
      }
      console.log(firstNumber, sign, number);
      markFlag = false;
    }
  });
});

equal.addEventListener("click", () => {
  flag = true;
  markFlag = true;
  if (sign === "+") {
    screen.textContent = +firstNumber + +number;
    number = +firstNumber + +number;
    firstNumber = "";
    sign = "";
  } else if (sign === "-") {
    screen.textContent = +firstNumber - +number;
    number = +firstNumber - +number;
    firstNumber = "";
    sign = "";
  } else if (sign === "/") {
    screen.textContent = +firstNumber / +number;
    number = +firstNumber / +number;
    firstNumber = "";
    sign = "";
  } else if (sign === "*") {
    screen.textContent = +firstNumber * +number;
    number = +firstNumber * +number;
    firstNumber = "";
    sign = "";
  }
  console.log(firstNumber, sign, number);
});

document
  .querySelector(".calculator__btn--special4")
  .addEventListener("click", () => {
    number = -number;
    screen.textContent = number;
    console.log(number);
  });

document
  .querySelector(".calculator__btn--special2")
  .addEventListener("click", () => {
    number = "";
    firstNumber = 0;
    flag = true;
    markFlag = true;
    sign = 0;
    screen.textContent = "";
  });
