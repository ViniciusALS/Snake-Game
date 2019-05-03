function snakeBody(xVal, yVal){
    this.x = xVal;
    this.y = yVal;
    this.next = null;
}

function snake() {
    let x = floor(floor(width/resolution) / 2 - 1) * resolution;
    let y = floor(floor(height/resolution) / 2 - 1) * resolution;

    let head = new snakeBody(x, y);

    this.xSpeed = 0;
    this.ySpeed = 0;

    this.size = 1;

    this.update = function() {
        head.x = head.x + this.xSpeed*resolution;
        head.x = head.y + this.ySpeed*resolution;

        if(head.x >= width) head.x = 0;
        if(head.x < 0) head.x = width;
        if(head.y >= height) head.y = 0;
        if(head.y < 0) head.y = height;
    }

    this.show = function(){
        fill(255);
        rect(head.x, head.y, resolution, resolution);
    }

    this.eat = function(foodPos){
        if(head.x === foodPos.x && this.y === foodPos.y){
            this.size++;
            // this.tail = new snake();
            // delete this.tail.xSpeed;
            // delete this.tail.ySpeed;

            return true;
        }
        return false;
    }
}