require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const personController = require('./controllers/personController')
const userController = require('./controllers/userController')
const passport = require("passport")
const LocalStrategy = require("passport-local")
const bodyParser = require("body-parser")
const jwt = require("jsonwebtoken")

const PORT = process.env.PORT

const app = express()

const User = require('./models/User')

// Asad

app.use(require("express-session")({
    secret: "Nothing",
    resave: false,
    saveUninitialized: false,
}));
 
app.use(passport.initialize());
app.use(passport.session());


app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
})

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Middleware that allows json to be accepted
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())
app.use(logger('dev'))

app.use(cors())

app.use('/', personController)
app.use('/user', userController)

app.listen(PORT, () => {
    console.log(`we are live on ${PORT}`)
})