function i6_perlin_noise_3D_setup() {
    resizeCanvas(windowWidth,windowHeight);
    background('#b7ff00ff');
    stroke('green');
    strokeWeight(0.2);
}

function i6_perlin_noise_3D_draw() {
    background('#b7ff00ff');
    translate(-width/2, 0);
    beginShape(QUADS);
    let quadWidth = 30;
    let quadHeight = 30;
    let rows = 40;
    let cols = width / quadWidth;
    let h = 200;
    let f = frameCount * 0.01;
    for (let z=0; z<rows; z++) {
        // let y = random(-20, 20);
        for (let x=0; x<cols; x++) {
            let x1 = x * quadWidth;
            let z1 = z * quadHeight;
            let z2 = (z+1) * quadHeight;
            let x2 = (x+1) * quadWidth;

            let y1 = map(noise(x*0.05, f, z*0.05),0,1,0,h);
            let y2 = map(noise(x*0.05, f, (z+1)*0.05), 0,1,0,h);
            let y3 = map(noise((x+1)*0.05, f, (z+1)*0.05), 0,1,0,h);
            let y4 = map(noise((x+1)*0.05, f, z*0.05), 0,1,0,h);

            vertex(x1, y1, z1);
            vertex(x1, y2, z2);
            vertex(x2, y3, z2);
            vertex(x2, y4, z1);
        }
    }
    endShape();
}