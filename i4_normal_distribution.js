function i4_normal_distribution_setup() {
    background(255);
}

function i4_normal_distribution_draw() {
    translate(-width/2, -height/2);
    let num = randomGaussian();
    let sd = 60;
    let mean = width / 2;
    let x = sd * num + mean;

    noStroke();
    fill(0, 10);
    ellipse(x, height / 2, 16, 16);
}