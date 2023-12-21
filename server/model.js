// const { Pool } = require('pg')

// const PG_URI = 'postgres://bwzctbwf:EmEg3YMJbUzhGhipRHACTEj05iqNaCbm@lallah.db.elephantsql.com/bwzctbwf'

// const pool = new Pool({
//   connectionString: PG_URI
// });

// module.exports = {
//   query: (text, params, callback) => {
//     console.log('executed query', text);
//     return pool.query(text, params, callback);
//   }
// };
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'mydatabase.db');

class SQLiteModel {
  constructor() {
    this.db = new sqlite3.Database(dbPath);
  }

  query(sql, params, callback) {
    if (!callback && typeof params === 'function') {
      callback = params;
      params = [];
    }

    this.db.all(sql, params, (err, rows) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, rows);
      }
    });
  }

  close() {
    this.db.close();
  }
}

module.exports = SQLiteModel;

// // 打开一个数据库连接
// let db = new sqlite3.Database(dbPath, (err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('成功连接到SQLite内存数据库.');

//   // 执行第一个SQL语句
//   db.run(`CREATE TABLE "public.User" (
//     "_id" INTEGER PRIMARY KEY AUTOINCREMENT,
//     "username" TEXT NOT NULL UNIQUE,
//     "password" TEXT NOT NULL
//   )`, (err) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log('成功创建User表.');

//     // 执行第二个SQL语句
//     db.run(`CREATE TABLE "public.Media" (
//       "_id" INTEGER PRIMARY KEY AUTOINCREMENT,
//       "type" TEXT NOT NULL,
//       "title" TEXT NOT NULL
//     )`, (err) => {
//       if (err) {
//         return console.error(err.message);
//       }
//       console.log('成功创建Media表.');
//       db.run(`INSERT INTO "public.User" (username, password) VALUES ('admin', 'admin')`, (err) => {
//         if (err) {
//           return console.error(err.message);
//         }
//         console.log('成功插入数据.');
//       // 关闭数据库连接
//       db.close((err) => {
//         if (err) {
//           return console.error(err.message);
//         }
//         console.log('成功关闭数据库连接.');
//       });
//     });
//   });
//   });
// });
