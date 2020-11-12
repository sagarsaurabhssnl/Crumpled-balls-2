class Trash {
    constructor(x, y) {
        var options = {
            restitution: 0.6,
            density:10,
            friction:0.5
        }

        this.body = Bodies.circle(x, y, 15, options);
        World.add(world, this.body);
    }

    show() {
        var pos = this.body.position
        ellipseMode(CENTER);
        circle(pos.x, pos.y, 30);
    }
}