function food(){

    this.x;
    this.y;

    this.generate = function(){
        let cols = floor(width/resolution);
        let rows = floor(height/resolution);
        this.x = floor(random(cols)) * resolution;
        this.y = floor(random(rows)) * resolution;
    }
    this.show = function(){
        fill('red');
        rect(this.x, this.y, resolution, resolution);
    }
    
}