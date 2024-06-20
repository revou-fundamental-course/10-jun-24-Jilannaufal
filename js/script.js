document.getElementById('convert').addEventListener('click', function() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const calculationInput = document.getElementById('calculation');
    
    const celsius = parseFloat(celsiusInput.value);
    if (isNaN(celsius)) {
        fahrenheitInput.value = 'Please enter a valid number.';
        calculationInput.value = '';
        return;
    }
    
    const fahrenheit = (celsius * 9/5) + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2);
    calculationInput.value = `${celsius}°C × (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
});

document.getElementById('reverse').addEventListener('click', function() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const calculationInput = document.getElementById('calculation');
    
    const fahrenheit = parseFloat(fahrenheitInput.value);
    if (isNaN(fahrenheit)) {
        celsiusInput.value = 'Please enter a valid number.';
        calculationInput.value = '';
        return;
    }
    
    const celsius = (fahrenheit - 32) * 5/9;
    celsiusInput.value = celsius.toFixed(2);
    calculationInput.value = `${fahrenheit}°F - 32 × (5/9) = ${celsius.toFixed(2)}°C`;
});
