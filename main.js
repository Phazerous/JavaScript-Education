const users = {
  u1: 'Phazerous',
  u2: 'Phazzy',
  u3: 'Dangerous'
}

const updatedUsers = Object.keys(users).map(key => ({ id: key, nickname: users[key] }));
console.log(updatedUsers);