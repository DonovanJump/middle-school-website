// This level is at a different scale, where the player is around a 2x1 box
var rects = [[0,12,1,36,0],[1,12,13,1,0],[1,17,2,4,0],[1,29,2,4,0],[1,41,2,7,0],[3,20,7,1,0],[3,32,7,1,0],[3,44,18,4,0],[5,26,7,1,0],[5,38,7,1,0],[12,23,2,4,0],[12,35,2,4,0],[14,12,4,7,0],[14,23,4,8,0],[14,35,13,5,0],[18,12,28,1,0],[18,23,12,2,0],[18,29,6,2,0],[21,46,14,2,0],[24,29,3,1,0],[27,34,1,8,0],[28,33,6,9,0],[30,23,4,6,0],[34,23,44,2,0],[34,33,1,4,0],[35,47,4,1,0],[39,44,4,4,0],[43,47,28,1,0],[46,12,2,7,0],[48,0,1,19,0],[49,0,14,1,0],[49,8,1,11,0],[50,8,1,4,0],[50,16,1,2,0],[51,11,2,1,0],[51,17,2,1,0],[54,8,4,1,0],[54,14,4,1,0],[54,20,4,1,0],[59,11,2,1,0],[59,17,2,1,0],[61,8,1,4,0],[61,16,1,2,0],[62,8,1,11,0],[63,0,1,19,0],[64,12,2,7,0],[66,12,28,1,0],[71,44,2,4,0],[73,47,4,1,0],[77,33,1,4,0],[77,46,14,2,0],[78,23,4,6,0],[78,33,6,9,0],[82,23,12,2,0],[84,34,1,8,0],[85,29,3,1,0],[85,35,13,5,0],[88,29,6,2,0],[91,44,18,4,0],[94,12,4,4,0],[94,20,4,11,0],[98,12,13,1,0],[98,23,13,2,0],[98,35,2,4,0],[100,38,7,1,0],[102,32,7,1,0],[109,29,2,4,0],[109,41,2,7,0],[111,12,1,36,0],[6,23,6,3,4],[6,35,6,3,4],[8,13,6,3,2],[12,27,2,1,2],[12,39,2,1,2],[23,40,4,2,2],[42,13,4,2,2],[59,1,4,2,2],[75,46,2,1,4],[86,30,2,1,2],[87,44,4,2,4],[88,13,6,3,2],[88,20,6,3,4],[103,29,6,3,4],[103,41,6,3,4],[109,33,2,1,2],[100,35,6,3,3],[98,13,6,3,1],[98,20,6,3,3],[98,25,6,3,1],[98,39,2,1,1],[85,40,4,2,1],[49,1,4,2,1],[35,46,2,1,3],[24,30,2,1,1],[21,44,4,2,3],[18,13,4,2,1],[3,17,6,3,3],[3,29,6,3,3],[3,41,6,3,3],[1,21,2,1,1],[1,33,2,1,1]];

// Convert the arrays to objects
for (var i = 0; i < rects.length; i++) {
  var r = rects[i];
  rects[i] = { x: r[0], y: r[1], w: r[2], h: r[3], type: r[4] };
}

// These are the values for each "type" attribute in the rectangles above
var TYPE_SOLID = 0;
var TYPE_RAMP_TOP_LEFT = 1;
var TYPE_RAMP_TOP_RIGHT = 2;
var TYPE_RAMP_BOTTOM_LEFT = 3;
var TYPE_RAMP_BOTTOM_RIGHT = 4;
