const Discord = require("discord.js");
const keys = require("../config/keys");
const color = require("colors")
const client = new Discord.Client();
client.login(keys.discordTOKEN).then((work) => (console.warn(color.green("[BOT]: Bot Running.")))).catch((err) => console.error(color.red("[BOT]:"+err)));

module.exports = {
    ensureAuthenticated: function(req, res, next) {
      if (req.isAuthenticated()) {
        return next();

      }
      req.flash('error_msg', 'Please log in to view that resource');
      res.redirect('/users/login');
      
    },
    forwardAuthenticated: function(req, res, next) {
      if (!req.isAuthenticated()) {
        return next();
      }
      res.redirect('/dashboard');
      var channel = client.channels.cache.get("965911417939181598")
      channel.send(req.user.name +" giriş yaptı")      
    }
  };