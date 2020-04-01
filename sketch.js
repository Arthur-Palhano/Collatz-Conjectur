//noprotect

function setup() {
  createCanvas(800, 800);
  background(30);

  for (i = 1; i < 8000; i++) {

    len = 20;
    angle = PI / 20;

    sequence = [];

    n = i;

    while (n != 1) {
      n = collatz(n);
      append(sequence, n);
    }

    append(sequence, 1);
    reverse(sequence);

    resetMatrix();
    translate(width / 3, height);

    for (j = 0; j < sequence.length; j++) {
      value = sequence[j];

      if (value % 2 == 0) {
        rotate(angle);
      } else {
        rotate(-angle);
      }
      stroke(random(180, 255), random(100, 190), random(50, 140));
      line(0, 0, 0, -len);
      translate(0, -len);
    }

  }
}


function draw() {}

function collatz(n) {
  if (n % 2 == 0) {
    return n / 2;
  } else {
    return (n * 3 + 1) / 2;
  }

}