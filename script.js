document.getElementById('calculateBtn').addEventListener('click', function() {
    const height = parseFloat(document.getElementById('height').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);

    if (height > 0 && weight > 0) {
        const bmi = (weight / (height * height)).toFixed(2);
        document.getElementById('result').textContent = `Your BMI is ${bmi}`;
    } else {
        document.getElementById('result').textContent = 'Please enter valid height and weight!';
    }
});
