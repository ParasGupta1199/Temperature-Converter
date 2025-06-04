class TemperatureConverter {
  static celsiusToFahrenheit(celsius) {
    return Number((celsius * 1.8 + 32).toFixed(2));
  }

  static fahrenheitToCelsius(fahrenheit) {
    return Number(((fahrenheit - 32) / 1.8).toFixed(2));
  }

  static kelvinToCelsius(kelvin) {
    return Number((kelvin - 273.15).toFixed(2));
  }

  static celsiusToKelvin(celsius) {
    return Number((celsius + 273.15).toFixed(2));
  }

  static fahrenheitToKelvin(fahrenheit) {
    return Number((((fahrenheit - 32) * 5) / 9 + 273.15).toFixed(2));
  }

  static kelvinToFahrenheit(kelvin) {
    return Number(((kelvin - 273.15) * 1.8 + 32).toFixed(2));
  }
}

// Cache DOM elements once
const conversionTypeSelect = document.getElementById("conversionType");
const inputTemp = document.getElementById("inputTemp");
const convertBtn = document.getElementById("convertBtn");
const resetBtn = document.getElementById("resetBtn");
const resultDiv = document.getElementById("result");

// Placeholder texts for input based on conversion type
const placeholders = {
  cToF: "Enter Celsius (°C)",
  fToC: "Enter Fahrenheit (°F)",
  kToC: "Enter Kelvin (K)",
  cToK: "Enter Celsius (°C)",
  fToK: "Enter Fahrenheit (°F)",
  kToF: "Enter Kelvin (K)",
};

// Update the placeholder based on the selected conversion type
function updatePlaceholder() {
  const type = conversionTypeSelect.value;
  inputTemp.placeholder = placeholders[type] || "Enter value";
  inputTemp.focus();
}

// Show result or error messages in resultDiv
function showResult(message) {
  resultDiv.textContent = message;
}

// Reset form fields and result
function resetForm() {
  conversionTypeSelect.value = "";
  inputTemp.value = "";
  inputTemp.placeholder = "Enter value";
  showResult("");
  inputTemp.focus();
}

// Perform conversion based on selected type and input
function performConversion() {
  const conversionType = conversionTypeSelect.value;
  const tempValue = parseFloat(inputTemp.value);

  if (!conversionType) {
    showResult("Please select a conversion type.");
    return;
  }

  if (isNaN(tempValue)) {
    showResult("Please enter a valid number.");
    return;
  }

  let result;

  switch (conversionType) {
    case "cToF":
      result = TemperatureConverter.celsiusToFahrenheit(tempValue);
      showResult(`${tempValue} °C = ${result} °F`);
      break;
    case "fToC":
      result = TemperatureConverter.fahrenheitToCelsius(tempValue);
      showResult(`${tempValue} °F = ${result} °C`);
      break;
    case "kToC":
      result = TemperatureConverter.kelvinToCelsius(tempValue);
      showResult(`${tempValue} K = ${result} °C`);
      break;
    case "cToK":
      result = TemperatureConverter.celsiusToKelvin(tempValue);
      showResult(`${tempValue} °C = ${result} K`);
      break;
    case "fToK":
      result = TemperatureConverter.fahrenheitToKelvin(tempValue);
      showResult(`${tempValue} °F = ${result} K`);
      break;
    case "kToF":
      result = TemperatureConverter.kelvinToFahrenheit(tempValue);
      showResult(`${tempValue} K = ${result} °F`);
      break;
    default:
      showResult("Invalid conversion type.");
  }
}

// Event listeners
conversionTypeSelect.addEventListener("change", updatePlaceholder);

convertBtn.addEventListener("click", performConversion);

inputTemp.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    performConversion();
  }
});

resetBtn.addEventListener("click", resetForm);

// Initial setup
resetForm();
