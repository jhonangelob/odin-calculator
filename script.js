const display = document.querySelector("#screen");
const keys = Array.from(document.querySelectorAll("button"));

const calculate = (number1, operator, number2) => {
  let result = "";
  n1 = parseFloat(number1);
  n2 = parseFloat(number2);
  operator === "multiply" && (result = n1 * n2);
  operator === "divide" && (result = n1 / n2);
  operator === "add" && (result = n1 + n2);
  operator === "subtract" && (result = n1 - n2);
  return result;
};

keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    const key = e.target;
    const action = key.dataset.action;
    const number = key.textContent;
    const currentDisplay = display.textContent;

    if (!action) {
      if (currentDisplay === "0") {
        display.textContent = number;
        previousKey = "number";
      } else {
        display.textContent += number;
        previousKey = "number";
      }
    }

    if (action === "decimal" && !display.textContent.includes(".")) {
      display.textContent += ".";
    }

    if (
      action === "multiply" ||
      action === "divide" ||
      action === "add" ||
      action === "subtract"
    ) {
      previousKey = "operator";
      firstValue = currentDisplay;
      operator = action;
      display.textContent = "0";
    }

    if (action === "calculate" && previousKey === "number" && firstValue) {
      secondValue = currentDisplay;
      calcValue = calculate(firstValue, operator, secondValue);
      display.textContent = calcValue;
    }

    if (action === "clear") {
      firstValue = "";
      operator = "";
      secondValue = "";
      display.textContent = "0";
    }

    if (action === "delete") {
      if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
      } else {
        display.textContent = display.textContent = "0";
      }
    }
  });
});
