document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const heightCm = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const resultElement = document.getElementById('bmi-result');

    if (heightCm > 0 && weight > 0) {
        // Convert height from cm to meters
        const heightM = heightCm / 100;
        // Calculate BMI
        const bmi = weight / (heightM * heightM);

        let resultMessage = `Your BMI is ${bmi.toFixed(2)}. `;

        // Determine BMI category
        if (bmi < 18.5) {
            resultMessage += 'You are underweight.';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            resultMessage += 'You have a normal weight.';
        } else if (bmi >= 25 && bmi < 29.9) {
            resultMessage += 'You are overweight.';
        } else {
            resultMessage += 'You are obese.';
        }

        resultElement.textContent = resultMessage;
    } else {
        resultElement.textContent = 'Please enter valid height and weight.';
    }
}); 