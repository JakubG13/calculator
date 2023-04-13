const screen = document.querySelector(".calculator__screen span");
const btns = [...document.querySelectorAll(".calculator__btn--normal")];
const marks = [...document.querySelectorAll(".calculator__btn--mark")];
const equal = document.querySelector(".calculator__btn--special5");
let number = "";
let firstNumber = 0;
let flag = true;
let markFlag = true;
let sign = 0;
let percent = false;
let startFlag = true;
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (startFlag) {
      screen.textContent = "";
      startFlag = false;
    }
    screen.textContent += btn.textContent;
    number += btn.textContent;
  });
});

document
  .querySelector(".calculator__btn--special3")
  .addEventListener("click", () => {
    number = number + "";
    number = [...number];
    index = number.length - 1;
    number.splice(index, 1);
    number = number.join("");
    screen.textContent = "";
    if (firstNumber) {
      screen.textContent += firstNumber;
      screen.textContent += sign;
    }
    screen.textContent += number;
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
  if (percent === true && (sign === "+" || sign === "-")) {
    multiplier = number / 100;
    number = multiplier * firstNumber;
  } else if (percent === true && (sign === "/" || sign === "*")) {
    multiplier = number / 100;
    number = multiplier;
  }
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
  percent = false;
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
    percent = false;
    screen.textContent = 0;
    startFlag = true;
  });

document
  .querySelector(".calculator__btn--special1")
  .addEventListener("click", () => {
    screen.textContent += "%";
    percent = true;
  });
