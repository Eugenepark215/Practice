// Math Operations
function add(a, b) { return a + b }
function subtract(a, b) { return a - b }
function multiply(a, b) { return a * b }
function divide(a, b) { return a / b }
// eslint-disable-next-line no-unused-vars
function wrongAdd(a, b) { return (a + b) + '' }

// Add your function type below:
type OperatorFunction = (a: number, b: number) => number;

// Math Tutor Function That Accepts a Callback
function mathTutor(operationCallback: OperatorFunction) {
  // eslint-disable-next-line no-console
  console.log("Let's learn how to", operationCallback.name, '!');
  let value25 = operationCallback(2, 5);
  // eslint-disable-next-line no-console
  console.log('When we', operationCallback.name, '2 and 5, we get', value25, '.');
  // eslint-disable-next-line no-console
  console.log('When we', operationCallback.name, value25, 'and 7, we get', operationCallback(value25, 7), '.');
  // eslint-disable-next-line no-console
  console.log('Now fill out this worksheet.');
}

export { }
// Call your functions below:

mathTutor(add);
mathTutor(subtract)
mathTutor(multiply)
mathTutor(divide);
// mathTutor(wrongAdd); will result in error
