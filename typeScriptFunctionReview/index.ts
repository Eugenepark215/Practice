function magnifyingGlass(): void {
  // eslint-disable-next-line no-console
  console.log('I will use my magnifying glass.')
}

function determineCulprit(): number {
  return Math.floor(Math.random() * 2 + 1)
}

function doSleuthing(numberOfClues: number, clue1: string, clue2: string, suspect1: string, suspect2: string) {
  // eslint-disable-next-line no-console
  console.log('I am a famous detective and I will solve the crime.');
  magnifyingGlass();
  // eslint-disable-next-line no-console
  console.log('Now I consider the first clue: ', clue1);
  // eslint-disable-next-line no-console
  console.log('Now I consider the second clue: ', clue2);

  let culpritNumber: number = determineCulprit();
  // eslint-disable-next-line no-console
  console.log('Now, I will return to you the culprit. There but for the grace of God go we.');
  if (culpritNumber === 1) { return (suspect1) }
  if (culpritNumber === 2) { return (suspect2) }

  return "I couldn't figure out who drank the priceless milk. :( :("
}

let answer: string;

answer = doSleuthing(2, 'The parrot heard everything!', 'All the doors and windows were shut from the INSIDE.', 'Burglar Bob', 'Saint Sam')
export { };

// eslint-disable-next-line no-console
console.log('The culprit was none other than ', answer, '!');
