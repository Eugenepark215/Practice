const customersArray = ['Custy Stomer', 'C. Oostomar', 'C.U.S. Tomer', 3432434, 'Custo Mer', 'Custopher Ustomer', 3432435, 'Kasti Yastimeur'];

function checkCustomersArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'string') {
      // eslint-disable-next-line no-console
      console.log(`Type error: ${array[i]} should be a string!`);
    }
  }
}
checkCustomersArray(customersArray);
