difference = 0;
leftWristX = 0;
rightWristX = 0;  
text_variable = "";

function setup()
{
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,230);
    
    canvas = createCanvas(800,400);
    canvas.position(430,230);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background("#FFA500");
    
    textSize(difference)
    text(document.getElementById("text_input"), 50,400);
}

function modelLoaded()
{
    console.log("Posnet is initialized!") ;
}


function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}