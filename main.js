prediction = "";

Webcam.set({
    width: 370,
    height: 280,
    image_format: 'png',
    png_quality: 90
});

document.getElementById('camera');
Webcam.attach('#camera');

function takeSnapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("resultImg").innerHTML = '<img id="captured_img" src="'+data_uri+'" />';
    });
}

console.log("ml5 version: ", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/GEXeLRQJH/model.json', modelLoaded);

function modelLoaded() {
    window.alert('Your teachable machine model has been loaded successfully');
}

function speak() {
    var synth = window.SpeechSynthesis;
    var speak_data = "Your prediction is" + prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}