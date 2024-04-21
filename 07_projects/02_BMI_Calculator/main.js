const form = document.querySelector('.bmi');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const heightInput = parseInt(document.querySelector('#height_input').value);
    const weightInput = parseInt(document.querySelector('#weight_input').value);
    const results = document.querySelector('#results');

    if (isNaN(heightInput) || heightInput <= 0 || isNaN(weightInput) || weightInput <= 0) {
        results.innerHTML = "Please provide valid height and weight values.";
    } else {
        
        const heightInMeters = heightInput / 100; // Convert height to meters
        const bmi = weightInput / (heightInMeters * heightInMeters);

        
        results.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;

        
    }
});
