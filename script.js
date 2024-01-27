function predict() {
    const city = document.getElementById('city').value;
    const rainfall = parseFloat(document.getElementById('rainfall').value);
    const temperature = parseFloat(document.getElementById('temperature').value);

    if (rainfall < 100 && temperature > 30) {
        const message = `High risk of drought and famine in ${city}. Take necessary precautions!`;
        displayPrediction(message);
        showAlert(message);
    } else {
        displayPrediction(`No immediate risk detected in ${city}.`);
    }
}

function displayPrediction(result) {
    document.getElementById('predictionResult').innerText = result;
}

function showAlert(message) {
    alert(message);
}
