const express =require ('express')
const cors =require ('cors')
const dotenv =require ('dotenv')
const bodyParser =require ('body-parser')
const session =require ('express-session')
const flash =require ('express-flash')
const SequelizeStore =require ("connect-session-sequelize")
const db =require ('./config/Database.js')
const AuthRoute =require ('./routes/AuthRoute.js')
const UserRoute =require ('./routes/UserRoute.js')
const NinRoute =require ('./routes/NinRoute.js')
const mysql =require ('mysql')



const app = express()
app.use(express.static('./public'))

// body-parser middleware use
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
});

// (async()=>{
//     await db.sync();
// })();

//database
// const db1 = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"Enoch@1345",
//     database:"ncra"
//   });
  
//   const db2= mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"Enoch@1345",
//     database:"kyc"
//   });

//   const compareDatabases = async () => {
// //     // const [dataMySQL] = connectionMySQL.query('SELECT  userName, userPhone, userEmail, role FROM users');
// //     // const [dataPostgres] =  connectionPostgres.query('SELECT  userName, userPhone, userEmail,role FROM users');
    
  
// //     // dataMySQL.forEach((rowMySQL) => {
// //     //   const match = dataPostgres.find((rowPostgres) => {
// //     //     return (
// //     //       rowPostgres.userName === rowMySQL.userName &&
// //     //       rowPostgres.userPhone === rowMySQL.userPhone &&
// //     //       rowPostgres.role === rowMySQL.role &&
// //     //       rowPostgres.userEmail === rowMySQL.userEmail
// //     //     ); // compare the relevant columns in each table
// //     //   });
  
// //     //   if (match) {
// //     //     passFailObj.pass.push({ mysql: rowMySQL, postgres: match });
// //     //   } else {
// //     //     passFailObj.fail.push({ mysql: rowMySQL });
// //     //   }
// //     // });
  
// //     // dataPostgres.forEach((rowPostgres) => {
// //     //   const match = dataMySQL.find((rowMySQL) => {
// //     //     return (
// //     //         rowPostgres.userName === rowMySQL.userName &&
// //     //         rowPostgres.userPhone === rowMySQL.userPhone &&
// //     //         rowPostgres.role === rowMySQL.role &&
// //     //         rowPostgres.userEmail === rowMySQL.userEmail
// //     //     ); // compare the relevant columns in each table
// //     //   });
  
// //     //   if (!match) {
// //     //     passFailObj.fail.push({ postgres: rowPostgres });
// //     //   }
// //     // });
  


// //     // return passFailObj;
// //     //    const passFailObj = { pass: [], fail: [] };
// //     //     const dataMySQL = await new Promise((resolve, reject) => {
// //     //       connectionMySQL.query('SELECT userId, userName, userPhone, userEmail, role FROM users', (err, result) => {
// //     //         if (err) {
// //     //           reject(err);
// //     //         } else {
// //     //           resolve(result);
// //     //         }
// //     //       });
// //     //     });
      
// //     //     const dataPostgres = await new Promise((resolve, reject) => {
// //     //       connectionPostgres.query('SELECT userId, userName, userPhone, userEmail,role FROM users', (err, result) => {
// //     //         if (err) {
// //     //           reject(err);
// //     //         } else {
// //     //           resolve(result);
// //     //         }
// //     //       });
// //     //     });
        
// //     //     // Rest of the code
        
// //     // dataMySQL.forEach((rowMySQL) => {
// //     //   const match = dataPostgres.find((rowPostgres) => {
// //     //     return (
// //     //       rowPostgres.userId === rowMySQL.userId &&
// //     //       rowPostgres.userName === rowMySQL.userName &&
// //     //       rowPostgres.userPhone === rowMySQL.userPhone &&
// //     //       rowPostgres.role === rowMySQL.role &&
// //     //       rowPostgres.userEmail === rowMySQL.userEmail
// //     //     ); // compare the relevant columns in each table
// //     //   });
  
// //     //   if (match) {
// //     //     passFailObj.pass.push({ mysql: rowMySQL, postgres: match });
// //     //   } else {
// //     //     passFailObj.fail.push({ mysql: rowMySQL });
// //     //   }
// //     // });
  
// //     // dataPostgres.forEach((rowPostgres) => {
// //     //   const match = dataMySQL.find((rowMySQL) => {
// //     //     return (
// //     //         rowPostgres.userId === rowMySQL.userId &&
// //     //         rowPostgres.userName === rowMySQL.userName &&
// //     //         rowPostgres.userPhone === rowMySQL.userPhone &&
// //     //         rowPostgres.role === rowMySQL.role &&
// //     //         rowPostgres.userEmail === rowMySQL.userEmail
// //     //     ); // compare the relevant columns in each table
// //     //   });
  
// //     //   if (!match) {
// //     //     passFailObj.fail.push({ postgres: rowPostgres });
// //     //   }
// //     // });
  
// //     // return passFailObj;
// //     //   };


// //   const [data1] = await db1.query('SELECT * FROM users');
// //   const [data2] = await db2.query('SELECT * FROM users');

//     const data1 = await new Promise((resolve, reject) => {
//           db1.query('SELECT userId, userName, userPhone, userEmail, role FROM users', (err, result) => {
//             if (err) {
//               reject(err);
//             } else {
//               resolve(result);
//             }
//           });
//         });
      
//         const data2 = await new Promise((resolve, reject) => {
//           db2.query('SELECT userId, userName, userPhone, userEmail,role FROM users', (err, result) => {
//             if (err) {
//               reject(err);
//             } else {
//               resolve(result);
//             }
//           });
//         });
        

//   const matches = [];
//   const mismatches = [];

//   data1.forEach((row1) => {
//     const match = data2.find((row2) => {
//       return( row2.userId === row1.userId && row2.userName === row1.userName);
//     });

//     if (match) {
//       matches.push({ db1: row1, db2: match });
//     } else {
//       mismatches.push({ db1: row1 });
//     }
//   });

//   data2.forEach((row2) => {
//     const match = data1.find((row1) => {
//       return (row1.userId === row2.userId && row1.userName === row2.userName);
//     });

//     if (!match) {
//       mismatches.push({ db2: row2 });
//     }
//   });

//   return { matches, mismatches };
// };

// Example usage
// compareDatabases()
//   .then((result) => {
//     console.log('Matches:', result.matches);
//     console.log('Mismatches:', result.mismatches);
//   })
//   .catch((err) => {
//     console.error('Error:', err);
//   });

  // app.get('/pass-fail', async (req, res) => {
  //   const passFailData = await compareDatabases();
  //   res.json(passFailData);
  // });




app.use(flash());

app.use(session({
    secret: process.env.SESS_SECRET="secret",
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));


app.use(cors({
  credentials:true,
  origin:"http://localhost:3012"
}));

app.use(AuthRoute)
app.use(UserRoute)
app.use(NinRoute)

dotenv.config()
const PORT = process.env.PORT || 4367
app.listen(PORT, (error) =>{
    error ? console.error(error) : console.log(`server running on\nhttp://localhost:${PORT}`);
})

module.exports=app;