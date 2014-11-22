var models = require('../models');
var bluebird = require('bluebird');
var db = require('../db/index.js')



module.exports = {
  messages: {
    get: function (req, res) {
      db.query('SELECT * from messages', function(err, rows, fields) {
      if (err) throw err;
      console.log('The solution is: ', rows);
    });

    }, // a function which handles a get request for all messages
    post: function (req, res) {



    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {}
  },

  something: {
    get: function(req, res) {
      console.log("something!");
    },
    post: function(req, res) {}
  }

};

