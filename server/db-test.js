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

// const saveQuery = `INSERT INTO "public.Media" ("type", "title")
// VALUES ('123', '234')
// RETURNING _id`
// db.query(saveQuery, (err, rows) => {
//     if (err) {
//         console.error(err.message);
//     } else {
//         console.log(rows);
//     }
//     db.close();
// });

const saveQuery = `SELECT * FROM "public.Media"`
db.query(saveQuery, (err, rows) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log(rows);
    }
    db.close();
});