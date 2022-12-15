const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/chinook.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.log(err.message);
  }

  console.log('Connected to the words.db');
})

const sqlQuery = `SELECT AlbumId id, Title title from albums WHERE AlbumId = ?`;
const albumId = 1;

// const getAllQuery = `SELECT * FROM albums`;
// db.all(getAllQuery, [], (err, rows) => {
//   if (err) {
//     console.log(err.message);
//   }

//   rows.forEach((row) => {
//     console.log(row.AlbumId, row.Title, row.ArtistId)
//   })
// });


db.get(sqlQuery, [albumId], (err, row) => {
  if (err) {
    console.log(err.message);
  }

  console.log(row.id, row.title)
})

db.close((err) => {
  if (err) {
    console.log(err.message);
  }

  console.log('Close the words.db connection');
});