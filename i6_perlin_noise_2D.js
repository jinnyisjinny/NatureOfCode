function i6_perlin_noise_2D_setup() {
    resizeCanvas(500,500);
    background('black');
    pixelDensity(1);
}

function i6_perlin_noise_2D_draw() {
    loadPixels();
    let xoff = 0.0;
    for (x=0; x<width; x++) {
        let yoff = 0.0;
        for (y=0; y<height; y++) {
            let bright = map(noise(xoff,yoff),0,1,0,255);
            let index = (x + y * width) * 4;
            pixels[index] = 0;
            pixels[index+1] = 0;
            pixels[index+2] = 0;
            pixels[index+3] = bright;
            yoff += 0.01;
        }
        xoff += 0.01;
    }

    // for (let x=0; x<width; x++) {
    //     for (let y=0; y<height; y++) {
    //         // let bright = random(255);
    //         let bright = map(noise(x,y),0,1,0,255);
    //         let index = (x + y * width) * 4;
    //         pixels[index+0] = 0;
    //         pixels[index+1] = 0;
    //         pixels[index+2] = 0;
    //         pixels[index+3] = bright;
    //     }
    // }
    updatePixels();
}