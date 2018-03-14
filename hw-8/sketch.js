function setup() {
    createCanvas( windowWidth, 600 );

}

function draw() {
    background(150, 225, 150);
    frameRate(1);
    console.log(width);

// declare variable for individual fill colors r, g, b and declare fColor for all fill colors
    let r = 250;
    let g = 100;
    let b = 50;
    let a = 0.5;
    let fColor = ( 'rgba(r, g, b, a)' );



// Create arcs
// declare x and y variables and increment them
// set radions to random values based on x and y
    for (let x = 50; x <= width; x += 50) {
        for (let y = 50; y <= height-50; y += 50) {
            arc( x, y, 50, 50, radians(random(x, y)), radians(random(x, y)));
        }
    }
// if ()

// Create ellipses that fill the top lef quarter of the screen
    fill('rgba( 200, 50, 100, 0.2)');
    stroke( 'rgba( 200, 200, 200, 0.5)')
    for (let x = 50; x <= width/2; x += 50) {
        for (let y = 50; y <= height/2; y += 50) {
            ellipse( x, y, 50, 50);
        }
    }

// Create rectangles that fill top right corner of screen
    fill('rgba( 100, 50, 200, 0.2)');
    for (let x = width/2 + 15; x <= width; x += 50 ) {
      for (let y = height/2 + 24; y <= height; y += 50) {
        rect( x, y, 50, 50);
      }
    }








}
