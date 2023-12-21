// Copyright 2023 shawn
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const SQLiteModel = require('./model.js');

const db = new SQLiteModel();

const findQuery =
// `SELECT * FROM "public"."User"`;
// `SELECT * FROM "public"."User" WHERE username = 'antonio'`
`SELECT password FROM "public.User" WHERE username = 'admin'`

db.query(findQuery, (err, rows) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log(rows);
    }
    db.close();
});
// .then(data => {
//   res.locals.user = data.rows;
//   console.log(res.locals.user)
//   let hash;
//   res.locals.user[0] === undefined ? hash = '*' : hash = res.locals.user[0].password
//   bcrypt.compare(currentUser.password, hash, function (err, result) {
//     if (result) return next();
//     console.log('no');
//     return next()
//   });
// })
// .catch(err => {
//   const errorObj = {
//     log: 'error in userController.findUser',
//     message: `server error ${err} `
//   };
//   return next(errorObj);
// })