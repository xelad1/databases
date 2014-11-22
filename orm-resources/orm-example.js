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

var Messages = sequelize.define('Message' {
  id: Sequelize.INTEGER,
  user_id: Sequelize.INTEGER,
  message: Sequelize.TEXT,
  time: Sequelize.DATE,
  roomname_id: Sequelize.INTEGER
});

var Users = sequelize.define('Message' {
  id: Sequelize.INTEGER,
  username: Sequelize.STRING,
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  age: Sequelize.INTEGER
});

var Roomnames = sequelize.define('Message' {
  id: Sequelize.INTEGER,
  name: Sequelize.STRING
});

/* .sync() makes Sequelize create the database table for us if it doesn't
 *  exist already: */
Messages.sync().success(function() {
  /* This callback function is called once sync succeeds. */

  // now instantiate an object and save it:
  var newMessage = Messages.build({username: "Jean Valjean", message:'Bonjour monde'});
  newMessage.save().success(function() {

    /* This callback function is called once saving succeeds. */

    // Retrieve objects from the database:
    Messages.findAll({ where: {username: "Jean Valjean"} }).success(function(messages) {
      // This function is called back with an array of matches.
      for (var i = 0; i < messages.length; i++) {
        console.log(messages[i].message + " exists");
      }
    });
  });
});







Users.sync().success(function() {
  /* This callback function is called once sync succeeds. */

  // now instantiate an object and save it:
  var newUser = Users.build({username: "chitopolo", first_name:'Rene', last_name:'Polo'});
  newUser.save().success(function() {

    /* This callback function is called once saving succeeds. */

    // Retrieve objects from the database:
    Users.findAll({ where: {username: "chitopolo"} }).success(function(users) {
      // This function is called back with an array of matches.
      for (var i = 0; i < users.length; i++) {
        console.log(users[i].username + " exists");
      }
    });
  });
});




Roomnames.sync().success(function() {
  /* This callback function is called once sync succeeds. */

  // now instantiate an object and save it:
  var newRoomname = Roomnames.build({name: "Lobby"});
  newRoomname.save().success(function() {

    /* This callback function is called once saving succeeds. */

    // Retrieve objects from the database:
    Roomnames.findAll({ where: {name: "Lobby"} }).success(function(roomnames) {
      // This function is called back with an array of matches.
      for (var i = 0; i < roomnames.length; i++) {
        console.log(roomnames[i].name + " exists");
      }
    });
  });
});
