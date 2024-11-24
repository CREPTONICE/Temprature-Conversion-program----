const temprature = document.getElementById("userInput");
const fahernheit = document.getElementById("celsiusToFahrenheit");
const celsius = document.getElementById("fahrenheitToCelsius");
const convert = document.getElementById("convert");
const answer = document.getElementById("answer");

let temp;

temprature.addEventListener("input", (event) => {
  const value = event.target.value;
  event.target.value = value.replace(/[^0-9.-]/g, "");
  // Allow numbers, decimal points, and negative signs
});

function conversion() {
  temp = temprature.value;

  if (temp === "") {
    answer.textContent = "Enter a number";
    return;
  }

  temp = Number(temp);

  if (fahernheit.checked) {
    temp = (temp * 9) / 5 + 32;
    answer.textContent = temp.toFixed(1) + "°F";
  } else if (celsius.checked) {
    temp = (temp - 32) * (5 / 9);
    answer.textContent = temp.toFixed(1) + "°C";
  } else {
    answer.textContent = "Select a UNIT";
    return;
  }
}

convert.addEventListener("click", conversion);

window.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    conversion();
  }
});
