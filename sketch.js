let screenSize = 600
let c = screenSize/bigSquare
let smaller = c*smallerSquare
let p = 0
let X = x*c
let Y = screenSize - (y*c +smaller);
function setup() {
  createCanvas(screenSize, screenSize);
}

function draw() {
  if(positions[p] == 'R'){
    X+=c;
    console.log("Direita");
  }else if(positions[p] == 'U'){
    Y-=c;
    console.log("Pra cima");
  }else if(positions[p] == 'U'){
    X-=c;
    console.log("Esquerda");

  }
  p++;
  fill(102, 0, 0);
  rect(0, 0, width, height);
  fill(114, 242, 75);
  rect((screenSize-smaller)/2, (screenSize-smaller)/2, smaller, smaller);
  fill(255, 10, 30);
  rect(X, Y, smaller, smaller);

}
