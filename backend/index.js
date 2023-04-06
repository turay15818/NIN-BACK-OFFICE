import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import session from 'express-session'
import flash from 'express-flash'
import SequelizeStore from "connect-session-sequelize"
import db from './config/Database.js'
import AuthRoute from './routes/AuthRoute.js'
import UserRoute from './routes/UserRoute.js'
import NinRoute from './routes/NinRoute.js'
import AuditTrailRoute from './routes/AuditTrailRoute.js'
import mysql from 'mysql'



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

(async()=>{
    await db.sync();
})();

app.use(flash());

app.use(session({
    secret: process.env.SESS_SECRET="secret",
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto',
        maxAge: 10 * 60 * 1000
    }
}));

 //Session auto logout after inactivity
app.get('/ping', (req, res) => {
    req.session.lastActivity = new Date().getTime();
    res.send('Pong!');
  });

  app.use((req, res, next) => {
    if (req.session && req.session.lastActivity) {
      const currentTime = new Date().getTime();
      const timeSinceLastActivity = currentTime - req.session.lastActivity;
      if (timeSinceLastActivity > req.session.cookie.maxAge) {
        // Log out the user
        req.session.destroy();
        return res.redirect('/login');
      }
    }
  
    // Update the last activity time
    req.session.lastActivity = new Date().getTime();
    next();
  });
  //end of Session auto logout after inactivity

app.use(cors({
  credentials:true,
  origin:"http://localhost:3012"
}));

app.use(AuthRoute)
app.use(UserRoute)
app.use(NinRoute)
app.use(AuditTrailRoute)

dotenv.config()
const PORT = process.env.PORT || 4366
app.listen(PORT, (error) =>{
    error ? console.error(error) : console.log(`server running on\nhttp://localhost:${PORT}`);
})
