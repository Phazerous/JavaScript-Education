const dan = {
  type: "person",
  data: {
    gender: "male",
    info: {
      id: 22,
      fullname: {
        first: "Dan",
        last: "Deacon"
      }
    }
  }
};

const deepPick = function (fieldDotNotation, obj = {}) {
  const [first, ...remaining] = fieldDotNotation.split('.');
  return remaining.length ? deepPick(remaining.join('.'), obj[first]) : obj[first];
}

console.log(deepPick("type", dan)); // "person"
console.log(deepPick("data.info.fullname.first", dan)); // "Dan"
