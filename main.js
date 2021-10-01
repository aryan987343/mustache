function preload() {

}

function setup() {
Canvas = createCanvas(300, 300);
Canvas.center();
video = createCapture(VIDEO);
video.hide();

pose = ml5.poseNet(video, model);

pose.on("pose", gotresult);
}

function gotresult(result) {
    if (result.length > 0) {
console.log(result);

console.log(result[0].pose.nose.x);

console.log(result[0].pose.nose.y);
 }
}

function model() {
    console.log("model has loaded");
}

function draw() {
    image(video, 0, 0, 300, 300);
}

function take_snapshot() {
    save("mustache.png");
}