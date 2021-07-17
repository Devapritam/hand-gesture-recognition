Webcam.set({
    width: 370,
    height: 310,
    image_format: 'png',
    png_quality: 90
});

document.getElementById('camera');
Webcam.attach('#camera');
