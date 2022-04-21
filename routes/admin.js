const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const keys = require('../config/keys');
const User = require("../models/User")
const color = require("colors");
const Discord = require("discord.js")  
const client = new Discord.Client({
    partials: ["CHANNELS"]
   })



// Welcome Page
router.get('/add',ensureAuthenticated, (req, res) => {
    if(req.user.isAdmin == false){
        res.redirect("/")
    }
    res.render("add",{title:"Admin Add",user:req.user});

});
router.post('/add', ensureAuthenticated,async(req, res) => {
    const filter = { _id: req.body.ID}
    const update = { Coin: req.body.Coin}
    await User.findOneAndUpdate(filter, update,(err, result) => {
        if(err) throw err;
        res.redirect("/admin/add")
        console.log(update);

           
        a = client.channels.cache.get("965911417939181598")
        a.send(`${req.body.name} adlı kişiye ${req.user.Coin} para yeni parası :${req.body.Coin} `)

        
    })
console.log(req.user.name + " : "+ req.user.Coin)
})  
client.login(keys.discordTOKEN).then((work) => (console.warn(color.green("[BOT]: Bot Running.")))).catch((err) => console.error(color.red("[BOT]:"+err)));

module.exports = router;