const express = require("express");
const { validationResult } = require("express-validator");
const router = express.Router({ mergeParams: true });
const passport = require('passport');
const { v4: uuidv4 } = require('uuid');
// Error Handling
const HttpError = require('../models/http-error')
// Import User model
const User = require('../models/User')
const jwt = require("jsonwebtoken")

const DUMMY_USERS = [
    {
        id: 'u1',
        name: 'Max Shwartz',
        email: 'test@test.com',
        password:'testerskjj'
    }
]

router.get('/', async(req,res, next) =>{
    let users;
    try{
        users = await User.find( {}, 'email name' );
    }catch (err) {
        const error = new HttpError(
            'Fetching users failed, please try again later.', 500
        );
        return next(error)
    }
    res.json({users: users.map(user => user.toObject({ getters:true }))})
    
})

// Asad
router.post('/signup', async (req,res) =>{
    console.log(req.body);
    User.register(new User({
        name: req.body.name,
        username: req.body.username,
    }), req.body.password, function(err, user){
        if(err){
            console.log(err);
            res.status(500).send(err);
        }
        else {
            passport.authenticate("local")(req, res, function(){
                const accessToken = jwt.sign(
                    { username: req.body.username },
                    process.env.ACCESS_TOKEN_SECRET
                );
                res.status(200).send({
                    accessToken,
                    username: user.username,
                });             
            });
        }
    });   
})

// Asad

router.post('/login', async (req,res, next) =>{
    User.findOne({username: req.body.username}, function(err, user) {
        passport.authenticate("local")(req, res, function(){
            console.log(req.user.id);
            const accessToken = jwt.sign(
                { username: req.body.username },
                process.env.ACCESS_TOKEN_SECRET
            );
            res.status(200).send({
                accessToken,
                username: user.username,
            }); 
        })
    })    
})

module.exports = router
