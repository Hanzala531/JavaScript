const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const guide = document.querySelector('#Weight_guide')
    const results = document.querySelector('#results');
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = "Please enter a valid height";
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please enter a valid weight";
    } else {
        results.innerHTML = `<span> Your BMI is :  ${bmi}</span>`;
    }
    if (bmi < 18.6) {
        guide.innerHTML = "You are Under Weight";
    } else if (bmi > 24.9) {
        guide.innerHTML = "Your are Over weight";
    } else {
        guide.innerHTML = "Your BMI is in normal range";
    }
});