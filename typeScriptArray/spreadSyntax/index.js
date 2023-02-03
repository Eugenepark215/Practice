'use strict';
exports.__esModule = true;
// eslint-disable-next-line no-unused-vars
function performDanceMove(moveName, moveReps, hasFlair) {
  // eslint-disable-next-line no-console
  console.log('I do the '.concat(moveName, ' ').concat(moveReps, ' times !'));
  if (hasFlair) {
    // eslint-disable-next-line no-console
    console.log('I do it with flair!');
  }
}
// eslint-disable-next-line no-unused-vars
var danceMoves = [
  ['chicken beak', 4, false],
  ['wing flap', 4, false],
  ['tail feather shake', 4, false],
  ['clap', 4, false],
  ['chicken beak', 4, true],
  ['wing flap', 4, true],
  ['tail feather shake', 4, true],
  ['clap', 4, true]
];
