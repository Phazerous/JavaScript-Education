const destruct = function ({ results: obj }) {
  const [userInfo] = obj;
  const { gender, name, email, location: { city } } = userInfo;
  const { title, first, last } = name;

  const fullName = `${title} ${first} ${last}`;


  return {
    fullName,
    city,
    gender,
    email
  }
}

fetch('https://randomuser.me/api/?result=1')
  .then(res => res.json())
  .then(destruct)
  .then(console.log)