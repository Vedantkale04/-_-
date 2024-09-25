function convertTemperature() {
    const tempInput = parseFloat(document.getElementById("tempInput").value);
    const unitSelect = document.getElementById("unitSelect").value;
    let result;
    let outputUnit;

    if (isNaN(tempInput)) {
        document.getElementById("result").innerText = "Please enter a valid number.";
        return;
    }

    switch (unitSelect) {
        case "celsius":
            result = (tempInput * 9/5) + 32;  // Celsius to Fahrenheit
            outputUnit = "°F";
            break;
        case "fahrenheit":
            result = (tempInput - 32) * 5/9;  // Fahrenheit to Celsius
            outputUnit = "°C";
            break;
        case "kelvin":
            // Convert Kelvin to Celsius, then to Fahrenheit
            const celsiusFromKelvin = tempInput - 273.15;
            result = (celsiusFromKelvin * 9/5) + 32; // Kelvin to Fahrenheit
            outputUnit = "°F (from K)";
            break;
        default:
            document.getElementById("result").innerText = "Please select a valid conversion.";
            return;
    }

    document.getElementById("result").innerText = `${tempInput} ${unitSelect === 'kelvin' ? 'K' : unitSelect === 'celsius' ? '°C' : '°F'} is ${result.toFixed(2)} ${outputUnit}`;
}
