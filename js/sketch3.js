console.log('sketch3.js is loaded');

var waves = [];

function setup() {
    var myCanvas = createCanvas(window.innerWidth, window.innerHeight);
    myCanvas.parent('myP5Container');
}

function draw() {
    clear();

    for (var i = 0; i < waves.length; i++) {
        waves[i].move();
        waves[i].recede();
        waves[i].display();
    
    if (waves[i].alpha <=0.01) {
        waves.splice(i,1); 
    }
    
    }

}


function mouseClicked() {
    waves.push(new Wave());
}

function Wave() {
    this.fluctuate = 0.0;
    this.magnitude = mouseY;
    this.alpha = 0.5;

    this.move = function () {
        this.fluctuate += 0.01;
    }
    this.recede = function () {
        this.magnitude += 0.05;
        this.alpha -= 0.001;

    }

    this.display = function () {
        noStroke();
        fill('rgba(245, 15, 41,' + this.alpha.toString() + ')');

        var xoff = 0;
        beginShape();


        for (var x = 0; x <= window.innerWidth + 10; x += 10) {
            var y = map(noise(xoff, this.fluctuate), 0, 1, this.magnitude, window.innerHeight);
            vertex(x, y);
            xoff += 0.05;

        }
        vertex(window.innerWidth, window.innerHeight);
        vertex(0, window.innerHeight);

        endShape();
    }


}