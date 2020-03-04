const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.post('/', async(req, res) => {
    //create user and save to db
    let userToBeCreated = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    await userToBeCreated.save()
    return res.send({
        username: userToBeCreated.username,
        email:userToBeCreated.email
    });

});

module.exports = router;
