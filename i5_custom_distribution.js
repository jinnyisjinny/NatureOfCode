let customWalker;

class CustomWalker extends Walker {
    step() {
        // let stepSize = random(0, 10); // oversampling
        let stepSize = montecarlo() * 10;

        let stepX = random(-stepSize, stepSize);
        let stepY = random(-stepSize, stepSize);

        this.x += stepX;
        this.y += stepY;
    }
}

function i5_custom_distribution_setup() {
    background('blue');
    customWalker = new CustomWalker();
}

function i5_custom_distribution_draw() {
    customWalker.step();
    customWalker.display();
}

function montecarlo() {
    while (true) {
        let r1 = random(1);
        let prob = r1 * r1; // exponential
        let r2 = random(1);
        if (r2 < prob) {
            return r1;
        }
    }
}