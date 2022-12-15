const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/sample.db', sqlite3.OPEN_READWRITE, (err) => console.log(err));

const languages = ['Java', 'JavaScript', 'Python', 'C#', 'Go', 'C', 'C++', 'HTML', 'CSS'];
const placeholders = languages.map((language) => '(?)').join(', ');
const sqlQuery = `INSERT INTO langs(name) VALUES ` + placeholders;

db.run(sqlQuery, languages, function (err) {
  if (err) {
    console.log(err);
  }

  console.log(`Added with id of ${this.lastID}`);
  console.log(this.changes);
});

db.close();