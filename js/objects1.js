var cX; //center X
var cY; //center Y
var bob1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    cX = windowWidth / 2;
    cY = windowHeight / 2;
    bob1 = new bob();

}

function draw() {
    ellipse(cX, cY, 50, 50);
    bob1.display();
    bob1.move();
}

function bob() {
    this.x = 15;
    this.y = 200;
    this.move = function() {
        this.x++;
    }
    this.display = function() {
        ellipse(this.x, this.y, 50, 50);
    }
}