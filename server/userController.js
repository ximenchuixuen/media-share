const SQLiteModel = require('./model.js');


const userController = {};
const db = new SQLiteModel();



userController.findUser = (req, res, next) => {
  const currentUser = req.body;
  console.log(currentUser);

  const findQuery =
// `SELECT * FROM "public"."User"`;
// `SELECT * FROM "public"."User" WHERE username = 'antonio'`
`SELECT * FROM "public.User" WHERE username = '${currentUser.username}' AND password =  '${currentUser.password}'`

  console.log(findQuery);
  // const hash = '*'
  // result == true
  db.query(findQuery, (err, rows) => {
    if (err) {
        const errorObj = {
        log: 'error in userController.findUser',
        message: `server error ${err} `
      };
        return next(errorObj)
    } else if (rows.length !==0 ) {
        console.log(rows);
        return next()
    } else {
      const NOTFOUND = {
        log: 'not found user',
        message: `server error ${err} `
      };
        return next(NOTFOUND)
    }
      
});

};
//   db.query(findQuery)
//     .then(data => {
//       res.locals.user = data.rows;
//       console.log(res.locals.user)
//       let hash;
//       res.locals.user[0] === undefined ? hash = '*' : hash = res.locals.user[0].password
//       bcrypt.compare(currentUser.password, hash, function (err, result) {
//         if (result) return next();
//         console.log('no');
//         return next()
//       });
//     })
//     .catch(err => {
//       const errorObj = {
//         log: 'error in userController.findUser',
//         message: `server error ${err} `
//       };
//       return next(errorObj);
//     })
// };


module.exports = userController;