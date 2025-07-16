let walker;

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  step() {
    let choice = int(random(4));
    if (choice == 0) {
      this.x++;
    } else if (choice == 1) {
      this.x--;
    } else if (choice == 2) {
      this.y++;
    } else {
      this.y--;
    }

    // let stepX = int(random(3)) - 1;
    // let stepY = int(random(3)) - 1;
    // this.x += stepX;
    // this.y += stepY;

    // let stepX = random(-1, 1)
    // let stepY = random(-1, 1);
    // this.x += stepX;
    // this.y += stepY;

    // let prob = random(1);
    // if (prob < 0.5) {
    //   this.x++;
    // } else if (prob < 0.6) {
    //   this.x--;
    // } else if (prob < 0.8) {
    //   this.y++;
    // } else {
    //   this.y--;
    // }

    // Random Walks Exercise 1.3 - 50% chance of moving in the direction of mouse
    // let prob = random(1);
    // if (prob < 0.5) {
    //   let diffX = this.x - mouseX;
    //   let diffY = this.y - mouseY;
    //   // if(diffX > 0) this.x--; else this.x++;
    //   // if (diffY > 0) this.y--; else this.y++;
    //   this.x += (diffX > 0) ? -1 : 1;
    //   this.y += (diffY > 0) ? -1 : 1;
    // } else if (prob < 0.6) {
    //   this.x++;
    // } else if (prob < 0.7) {
    //   this.x--;
    // } else if (prob < 0.8) {
    //   this.y++;
    // } else {
    //   this.y--;
    // }
  }

  display() {
    strokeWeight(2);
    stroke('red');
    point(this.x, this.y);
  }
}

function i3_random_walk_setup() {
    background('yellow');
    walker = new Walker();
}

function i3_random_walk_draw() {
    walker.step();
    walker.display();
}