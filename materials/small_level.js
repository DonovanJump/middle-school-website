// Create a rectangle with an (x, y) coordinate, a width, and a height
function rect(x, y, w, h) {
  return { x: x, y: y, w: w, h: h };
}

// Represent the level as a list of rectangles (assumes window is 400x300)
var rects = [
  rect(0, 0, 400, 20),
  rect(0, 0, 20, 300),
  rect(0, 280, 400, 20),
  rect(380, 0, 20, 300),
  rect(0, 100, 100, 20),
  rect(100, 120, 20, 20),
  rect(120, 140, 20, 20),
  rect(140, 160, 20, 20),
  rect(160, 180, 20, 20),
  rect(180, 200, 20, 20),
  rect(200, 220, 100, 20)
];
