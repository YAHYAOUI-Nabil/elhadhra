const express = require("express");
require('dotenv').config();
const passport = require('passport');
const sslRedirect = require('heroku-ssl-redirect').default;
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const session = require('express-session');

const userRoutes = require('./routes/userRoutes');
const articleRoutes = require('./routes/articleRoutes');
const videoRoutes = require('./routes/videoRoutes');
const connectDB = require("./middlewares/connectDB");

const app = express();
app.use(express.json());
app.use(sslRedirect());
app.disable('x-powered-by');
app.use(helmet());
app.use(cors());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    );
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With,content-type, Accept'
    );
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

  app.use(
    session({
      secret: process.env.SECRET_OR_KEY,
      resave: false,
      saveUninitialized: false,
    })
  );
  
  app.use(passport.initialize());
  app.use(passport.session());


connectDB();


app.use('/auth', userRoutes);
app.use('/articles', articleRoutes);
app.use('/videos', videoRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('./client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

const port = parseInt(process.env.PORT) || 8082;

app.listen(5000, () => { console.log(`server is running on ${port}`)});