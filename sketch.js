let back_button;
let state;
let buttons = [];
const buttonNames = [
  'i3_random_walk',
  'i4_normal_distribution',
  'i5_custom_distribution',
  'i6_perlin_noise_1D',
  'i6_perlin_noise_2D',
  'i6_perlin_noise_3D',
];

function setup() {
  createCanvas(1500, 800, WEBGL);
  background(0);
  createButtons();
}

function draw() {
  checkButtonPressed();
  drawOnState();
}

function checkButtonPressed() {
  back_button.mousePressed(() => {
    state = 'init';
    resizeCanvas(1500, 800);
    showButtons();
    back_button.hide();
    background(0);
  });

  buttons[0].mousePressed(() => {
    state = 'i3_random_walk';
    i3_random_walk_setup();
    hideButtons();
    back_button.show();
  });

  buttons[1].mousePressed(() => {
    state = 'i4_normal_distribution';
    i4_normal_distribution_setup();
    hideButtons();
    back_button.show();
  });

  buttons[2].mousePressed(() => {
    state = 'i5_custom_distribution';
    i5_custom_distribution_setup();
    hideButtons();
    back_button.show();
  })

  buttons[3].mousePressed(() => {
    state = 'i6_perlin_noise_1D';
    i6_perlin_noise_setup();
    hideButtons();
    back_button.show();
  })

  buttons[4].mousePressed(() => {
    state = 'i6_perlin_noise_2D';
    i6_perlin_noise_2D_setup();
    hideButtons();
    back_button.show();
  })

  buttons[5].mousePressed(() => {
    state = 'i6_perlin_noise_3D';
    i6_perlin_noise_3D_setup();
    hideButtons();
    back_button.show();
  })
}

function drawOnState() {
  if (state == 'i3_random_walk') {
    i3_random_walk_draw();
  } else if (state == 'i4_normal_distribution') {
    i4_normal_distribution_draw();
  } else if (state == 'i5_custom_distribution') {
    i5_custom_distribution_draw();
  } else if (state == 'i6_perlin_noise_1D') {
    i6_perlin_noise_draw();
  } else if (state == 'i6_perlin_noise_2D') {
    i6_perlin_noise_2D_draw();
  } else if (state == 'i6_perlin_noise_3D') {
    i6_perlin_noise_3D_draw();
  }
}

function createButtons() {
  back_button = createButton('back');
  back_button.position(width-50, height-50);
  back_button.hide();

  let offsetY = 100;
  let offsetX = 200;
  let i = 0;
  for (let y=10; y<height; y+=offsetY) {
    for (let x=10; x<width; x+=offsetX) {
      if (i >= buttonNames.length) {
        break;
      }

      buttons[i] = createButton(buttonNames[i]);
      buttons[i].position(x, y);
      i++;
    }
  }
}

function hideButtons() {
  for(let i=0; i<buttons.length; i++) {
    buttons[i].hide();
  }
}

function showButtons() {
  for(let i=0; i<buttons.length; i++) {
    buttons[i].show();
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    noLoop();
  } else if (key === 'r' || key === 'R') {
    loop();
  }
}