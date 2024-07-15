function stringChop(str, size) {
  // Check for invalid inputs
  if (!str || typeof str !== 'string' || str.length === 0 || isNaN(size) || size <= 0) {
    return [];
  }

  let newArr = [];
  for (let i = 0; i < str.length; i += size) {
    newArr.push(str.slice(i, i + size));
  }
  return newArr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = Number(prompt("Enter Chunk Size."));
alert(stringChop(str, size));
