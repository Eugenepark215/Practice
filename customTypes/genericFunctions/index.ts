function getFilledArray<T>(value: T, n: number): T[] {
  return Array(n).fill(value);
}

let stringArray: string[];
let numberArray: number[];
let personArray: { name: string, age: number }[];
let coordinateArray: [number, number][];

// eslint-disable-next-line no-unused-vars
stringArray = getFilledArray<string>('hi', 6);
// eslint-disable-next-line no-unused-vars
numberArray = getFilledArray<number>(9, 6);
// eslint-disable-next-line no-unused-vars
personArray = getFilledArray<{ name: string, age: number }>({ name: 'J. Dean', age: 24 }, 6);
// eslint-disable-next-line no-unused-vars
coordinateArray = getFilledArray<[number, number]>([3, 4], 6);
export { }
