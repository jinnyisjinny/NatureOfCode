let buttons = [];
let back_button;
let state;

function setup() {
  createCanvas(800, 500);
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
}

function drawOnState() {
  if (state == 'i3_random_walk') {
    i3_random_walk_draw();
  } else if (state == 'i4_normal_distribution') {
    i4_normal_distribution_draw();
  } else if (state == 'i5_custom_distribution') {
    i5_custom_distribution_draw();
  }
}

function createButtons() {
  back_button = createButton('back');
  back_button.position(width-50, height-50);
  back_button.hide();

  buttons[0] = createButton('i3_random_walk');
  buttons[0].position(width/2, height/2);

  buttons[1] = createButton('i4_normal_distribution');
  buttons[1].position(width/2, height/2+50);

  buttons[2] = createButton('i5_custom_distribution');
  buttons[2].position(width/2, height/2+100);
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