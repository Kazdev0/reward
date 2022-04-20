const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const keys = require('../config/keys');
const User = require("../models/User")

// Welcome Page
router.get('/panel',  ensureAuthenticated,  (req, res) => {
    const user = req.user
    res.render('admin',{user:req.user})
    

});
router.post('/panel', ensureAuthenticated,(req, res) => {
    var coin = req.user.coin
    var ncoin = req.body.Coin
    var email = req.user.Email
    mongoose.connect(keys.mongoURI,function(req, result) {
        User.findOneAndUpdate({Coin: coin},{Coin:ncoin})
    })    
})
module.exports = router;