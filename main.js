// Simple Regex

let text = 'testing: 1, 2, 3';
let regex = /\d+/g;

console.log(regex.test(text));
console.log(text.search(regex));
console.log(text.match(regex));

console.log(text.replace(regex, '#'));
console.log(text.split('D+'));
