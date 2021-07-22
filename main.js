prediction1 = "";
prediction2 = "";

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
    var synth = window.speechSynthesis;
    var speak_data1 = "Your first prediction is" + prediction1;
    var speak_data2 = "Your second prediction is" + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
    utterThis.rate = 1;
    synth.speak(utterThis);
}

function preEmotion() {
    img = document.getElementById("captured_img");
    classifier.classify(img, gotResults);
}

function gotResults(errors, results) {
    if(errors) {
        console.error(errors);
    }
    else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction1 = results[0].label;
        prediction2 = results[1].label;
        emoji1 = document.getElementById("update_emoji");
        emoji2 = document.getElementById("update_emoji2");
        speak();

        if(results[0].label == "Excellent") {
            emoji1.innerHTML = "&#128076;";
        }
        if(results[0].label == "Victory") {
            emoji1.innerHTML = "&#9996;";
        }
        if(results[0].label == "Namaste") {
            emoji1.innerHTML = "&#128080;";
        }
        if(results[0].label == "Clap") {
            emoji1.innerHTML = "&#128079;";
        }
        if(results[0].label == "Like") {
            emoji1.innerHTML = "&#128077;";
        }

        if(results[1].label == "Excellent") {
            emoji2.innerHTML = "&#128076;";
        }
        if(results[1].label == "Victory") {
            emoji2.innerHTML = "&#9996;";
        }
        if(results[1].label == "Namaste") {
            emoji2.innerHTML = "&#128080;";
        }
        if(results[1].label == "Clap") {
            emoji2.innerHTML = "&#128079;";
        }
        if(results[1].label == "Like") {
            emoji2.innerHTML = "&#128077;";
        }
    }
}