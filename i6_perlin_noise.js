let x;
let y;
let tx = 0;
let ty = 10000;

function i6_perlin_noise_setup() {
    background('#FFFFF0');
    strokeWeight(0.2);
    stroke(0);
    frameRate(40);
}

function i6_perlin_noise_draw() {
    x = map(noise(tx),0,1,0,width);
    y = map(noise(ty),0,1,0,height);
    fill(255);
    ellipse(x,y,30,30);
    tx += 0.01;
    ty += 0.01;
}