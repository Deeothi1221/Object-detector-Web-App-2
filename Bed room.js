function setup() {
    canvas = createCanvas(650, 450);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modeloaded)
    document.getElementById("status").innerHTML = "Status :Detecting objects"
}

function modeloaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, result) {
    if (error) {
        console.log(error);
    } else {
        console.log(result)
        object = result;
    }
}

function draw() {
    image(img, 0, 0, 650, 450);
    fill("#ff0000");
    text('Bed room');
    noFill();
    stroke("#ff0000");
    rect(xcoord, ycoord, width, height);
}