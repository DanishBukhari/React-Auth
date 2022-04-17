const express = require("express");
const Person = require('./../models/Person')
const User = require('./../models/User')

const router = express.Router({ mergeParams: true });

// gets a list of Persons from database
router.get("/people/:username", (req, res) => {
    Person.find({ "user.username": req.params.username})
        .then((people => res.json({
            status: 200,
            people: people
        })))
})

// creates a person from database
router.post("/createperson", (req, res) => {
    // creates a new instance of a person locally and then saves it to database
    const data = req.body
    Person.create(data, (function(err, person){
            if (err){
                console.log(err);
            }
            else {
                User.findOne({username:req.body.username}, (function(err, user){
                    if (err){
                        console.log(err);
                    }
                    else {
                        person.user.id = user.id;
                        person.user.username = user.username;
                        person.save();
                        res.json(person)
                        console.log(person)
                    }
                }))
               
            }
        }))
})

router.delete("/:id", (req,res) => {
    Person.findByIdAndDelete(req.params.id, function(err, person){
        if (err) {
            console.log(err);
        }
        else {
            res.json(person)
            
        }
    })
})
module.exports = router; 