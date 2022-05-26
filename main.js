canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_x = 10;
rover_y = 10;
var background_img;
function add() {
    background_img = new Image();
    background_img.onload = uploadbackground;
    background_img.src= "mars.jpg";

    rover_img = new Image();
    rover_img.onload = uploadrover;
    rover_img.src= "rover.png";
}

function uploadbackground() {
    ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_img, rover_x, rover_y, 100, 90);
}

window.addEventListener("keydown", mykeydown);

function mykeydown(e) {
    keypress = e.keyCode;
    /*if (keypress == "38") {
        up();
    }
    if(keypress=="40"){
        down();
    }
    if(keypress=="39"){
        right();
    }
    if(keypress=="37"){
        left();
    }*/
}
uploadbackground();
uploadrover();