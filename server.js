// React Dropship =======================
// Require all Dependencies =======================
var express       = require('express');
var app           = express();
var mongoose      = require('mongoose');
var passport      = require('passport');
var flash         = require('connect-flash');
var morgan        = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var session       = require('express-session');
var MySQLStore    = require('express-mysql-session')(session);
var configDB      = require('./config/auth.js');
var path          = require('path');
const socket      = require('socket.io');
const axios       = require("axios");
const routes = require("./routes");
var PORT          = process.env.PORT || 5000;
require("dotenv").config();

// set up our  application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: false }));



app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });



if ( process.env.NODE_ENV === 'production' ) {
  app.use(express.static("client/build"));
} else {
  app.use(express.static(path.join(__dirname, 'public')));
}


// routes ======================================================================
// var routes = require("./controllers/routes.js")
// var userRoutes = require("./controllers/userController.js");

// app.use("/user", userRoutes);
// app.use('/', routes.dispatch);

app.use(routes);














//MYSQL/////////////////////////////////////////////

var options;
if (process.env.JAWSDB_URL) {
    //Heroku deployment values

} else {
    options = {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    };
}

var sessionStore = new MySQLStore(options);
app.use(session({
    secret: process.env.SESSION_SECRET, // session secret
    store: sessionStore,
    resave: true,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session




// Connect to Firebase DB =======================
var admin = require('firebase-admin');
var serviceAccount = require('./highstandardsFirebase.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://highstandard-online.firebaseio.com'
});



// Connect to the Mongo DB =======================
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/dropship_db"
);



// Listening port ─────────────────────────────────────────────────────────────

const server = app.listen(PORT, function () {
    console.log("Server running on PORT " + PORT);
});


var io = socket(server);


var usernames = {};
var rooms = [];


io.on('connection', function (socket) {
  console.log('Im connected')
     
  socket.on('adduser', function (data) {
    console.log('Im adding user',data)
      var username = data.username;
      var room = data.room;

      if (rooms.indexOf(room) != -1) { 
          socket.username = username;
          socket.room = room;
          usernames[username] = username;
          socket.join(room);
  
        
          socket.broadcast.to(room).emit('updatechat', 'SERVER',data);
      } else {
          socket.emit('updatechat', 'SERVER', 'Please enter valid code.');
      }
  });
   
  socket.on('createroom', function (data) {
      var new_room = ("" + Math.random()).substring(2, 7);
      rooms.push(new_room);
      data.room = new_room;
      
      // socket.emit('updatechat', 'System',`Hello ${data.chatUserName}! You are now being connected to our LiveChat. Please wait while we connect you to a Product Specialist.`);
     
      socket.emit('roomcreated', data);
      io.sockets.emit('newChatRequest', data)
  });

  socket.on('sendchat', function (data) {
    console.log('send chat data',socket.username, socket.room)
    data.room = socket.room
    data.username =socket.username
      io.sockets.in(socket.room).emit('updatechat', socket.username, data);
  });

  socket.on('adminchat', function (data) {

      io.sockets.in(data.room).emit('updatechat', data.username, data);
  });

//   socket.on('disconnect', function () {
//       delete usernames[socket.username];
//       io.sockets.emit('updateusers', usernames);
//       if (socket.username !== undefined) {
//           socket.broadcast.emit('updatechat', 'SERVER', socket.username + ' has disconnected');
//           socket.leave(socket.room);
//       }
//   });
});
