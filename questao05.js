let string = "Há algo de bom neste mundo e vale a pena lutar por isso."
let invertedString = "";

for (let i = string.length - 1; i >= 0; i--) {
  invertedString += string[i];
}

console.log(invertedString);