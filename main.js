Nose_X = 0;
Nose_Y = 0;
function preload(){

}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.position(530, 200);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    pose = ml5.poseNet(video, loaded);
    pose.on("pose", gotposes);
}

function gotposes(results){
 if (results.length > 0) {
     console.log(results);
    console.log("Nose X = " + results[0].pose.nose.x + "Nose Y = " + results[0].pose.nose.y);
    Nose_X = results[0].pose.nose.x;
    Nose_Y = results[0].pose.nose.y;
 }
}

function loaded(){
    console.log("Model llllllllllloooooooooddddddddeeed!!!!!!!!!!!")
}

function draw(){
    image(video, 0, 0, 300, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(Nose_X, Nose_Y, 50)
}

function Snap(){
    Name = document.getElementById("Name").value;
    save(Name + ".PNG")
}