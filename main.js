Webcam.set({
width: 350,
height: 300,
image_format: 'png',
png_quality: 90,
}) ;
Camera = document.getElementById("camera") ;
Webcam.attach('#camera') ;
function take_snapshot() {
Webcam.snap(function(data_uri) { document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';}
)} ; 
console.log('ml5 version: ', ml5.version) ;
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json', modelLoaded) ;
function modelLoaded() {
console.log('model loaded') ;
} ;
function check() {
img = document.getElementById('captured_image') ;
classifier.classify(img, gotResult) ;
}
function gotResult(error, results) { 
if(error) {
console.error(error) ;
}
else {
console.log(results) ;
document.getElementById("result_object_name").innerHTML = results [0].label ;
document.getElementById("result_object_accuracy").innerHTML = results [0].confidence.tofixed(3) ;
}
}
var synth = window.speechSynthesis ;
speak_data = "this is " + results [0].lablel ;
var utterThis = new speechSynthesisUtterance(speak_data) ;
synth.speak(utterThis) ;
document.getElementById("result_object_name").innerHTML = results [0].label ;
document.getElementById("result_object_accuracy").innerHTML = results [0].confidence.tofixed(3) ;