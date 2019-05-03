const resolution = 10;
var s;
var f;

function setup() {
    frameRate(10);
    createCanvas(400, 400);

    s = new snake();
    f = new food();

    f.generate();
}

function draw() {
    background(56);
    s.update();
    s.show();
    f.show();

    if(s.eat(f)) f.generate();
}

function keyPressed(){
    switch(keyCode){
        case UP_ARROW:
            if(s.ySpeed !== 1){
            s.xSpeed = 0;
            s.ySpeed = -1;
            }
            break;
        case RIGHT_ARROW:
            if(s.xSpeed !== -1){
                s.xSpeed = 1;
                s.ySpeed = 0;
            }
            break;
        case DOWN_ARROW:
            if(s.ySpeed !== -1){
                s.xSpeed = 0;
                s.ySpeed = 1;
            }
            break;
        case LEFT_ARROW:
            if(s.xSpeed !== 1){
                s.xSpeed = -1;
                s.ySpeed = 0;
            }
            break;
    }
}