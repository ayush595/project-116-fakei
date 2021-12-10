moustacheX = 0;
moustacheY = 0;


function preload() {
    imagu = loadImage("kra.png");
}
 
function setup() {
    canvas= createCanvas(500, 500);
    canvas.center();
    webcam= createCapture(VIDEO);
    webcam.size(500, 500);
    webcam.hide();

    posenetter= ml5.poseNet(webcam, modelLoaded);
posenetter.on("pose",resultws);
}
function modelLoaded() {
    console.log("posenet is loaded my friend");
}
function draw() {
    image(webcam, 0, 0,500 , 500)
    image(imagu, moustacheX, moustacheY, 50, 50); 
}
function takesnap() {
    save("minecraftscrazyman.png");
}
function resultws(results) {
    if (results.length > 0) {
        console.log(results);
        moustacheX = results[0].pose.nose.x-25;
        moustacheY = results[0].pose.nose.y-25; 

    }
    
}
