function repeatIt(str) {
  return str.toString().repeat(10);
}

const magic = repeatIt`custom word `;

console.log(magic);
