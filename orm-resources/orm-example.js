/* You'll need to
 * npm install sequelize
 * before running this example. Documentation is at http://sequelizejs.com/
 */

var Sequelize = require("sequelize");
var sequelize = new Sequelize("chat", "root", "");
/* TODO this constructor takes the database name, username, then password.
 * Modify the arguments if you need to */

/* first define the data structure by giving property names and datatypes
 * See http://sequelizejs.com for other datatypes you can use besides STRING. */
// var User = sequelize.define('User', {
//   username: Sequelize.STRING
// });

var Message = sequelize.define('Message' {
  id: Sequelize.INTEGER,
  username: Sequelize.STRING,
  message: Sequelize.TEXT,
  time: Sequelize.DATE,
  roomname: Sequelize.STRING
});

/* .sync() makes Sequelize create the database table for us if it doesn't
 *  exist already: */
Message.sync().success(function() {
  /* This callback function is called once sync succeeds. */

  // now instantiate an object and save it:
  var newMessage = Message.build({username: "Jean Valjean", message:'Bonjour monde'});
  newMessage.save().success(function() {

    /* This callback function is called once saving succeeds. */

    // Retrieve objects from the database:
    Message.findAll({ where: {username: "Jean Valjean"} }).success(function(messages) {
      // This function is called back with an array of matches.
      for (var i = 0; i < messages.length; i++) {
        console.log(messages[i].username + " exists");
      }
    });
  });
});
