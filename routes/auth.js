const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/users');

const SECRET_KEY = '12345678';

router.post('/', async(req, res) => {
    let user = await User.findOne({ email: req.body.email });
    
    if(User){
        return res.status(400).send("Invalid Login Credentials2");
    }

    let isPWValid = user.password === res.body.password;
    if(!isPWValid){
        return res.status(400).send("Invalid Login Credentials1");
    }

    let token = jwt.sign({ id: user_id, email: user.email }. SECRET_KEY);

    res.send({
        "token": token
    });


});

module.exports = router;
