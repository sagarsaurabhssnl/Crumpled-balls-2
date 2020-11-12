class Bin {
    constructor(x, y, w, h) {
        var options = {
            isStatic: true
        }
        rectMode(CENTER);
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        
        World.add(world, this.body);
    }

    show() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x,pos.y, this.width, this.height);
    }
}