console.log('sketch4.js is loaded');

var birds = [];
var birdNumber =800;


function setup() {
    var myCanvas = createCanvas(window.innerWidth, window.innerHeight);
    myCanvas.parent('myP5Container');

 for(var i=0; i<birdNumber; i++){
 birds.push(new Bird(random(0, window.innerWidth), random(0, window.innerHeight)));     
            }

}

function draw() {
    
  
fill(0, 0, 0, 0);
    
rect(0, 0, window.innerWidth, window.innerHeight);    

var mousePos = createVector (mouseX, mouseY);
    
for(var i=0; i<birds.length; i++) {
   birds[i].seek(mousePos);
   birds[i].update();    
   birds[i].display();
}
    
}

function Bird(x, y) {
    this.location = createVector(x,y);
    this.velocity = createVector(0, -2);
    this.acceleration = createVector(0,0);
    this.r = 1;
    this.maxforce = random(0.005, 0.15);
    this.maxspeed = random(2, 20);
    
    this.update = function(){
      
        this.velocity.add(this.acceleration);
        
        this.velocity.limit(this.maxspeed);
        this.location.add(this.velocity);
      
        this.acceleration.mult(0);    
    }
    
    this.seek = function(target){ 
      var desired = p5.Vector.sub(target, this.location);
      desired.normalize();
      
      var steer = p5.Vector.sub(desired, this.velocity);
      steer.limit(this.maxforce);
        
      this.acceleration.add(steer);    
    
    }
    
    this.display = function() {
     fill (250, 5, 50);
     noStroke();
     ellipse(this.location.x, this.location.y, this.r, this.r);   
    
    }

}



