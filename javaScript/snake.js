function snake(){
    this.x = floor(floor(width/resolution) / 2 - 1) * resolution;
    this.y = floor(floor(height/resolution) / 2 - 1) * resolution;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.tail = [];

    this.update = function() {
        this.x = this.x + this.xSpeed*resolution;
        this.y = this.y + this.ySpeed*resolution;

        if(this.x >= width) this.x = 0;
        if(this.x < 0) this.x = width;
        if(this.y >= height) this.y = 0;
        if(this.y < 0) this.y = height;
    }

    this.show = function(){
        fill(255);
        rect(this.x, this.y, resolution, resolution);
    }

    this.eat = function(foodPos){
        if(this.x === foodPos.x && this.y === foodPos.y){
            return true;
        }
        return false;
    }
}