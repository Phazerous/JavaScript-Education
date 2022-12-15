const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/words.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.log(err.message);
  }

  console.log('Connected to the words.db');
})

db.close((err) => {
  if (err) {
    console.log(err.message);
  }

  console.log('Close the words.db connection');
});