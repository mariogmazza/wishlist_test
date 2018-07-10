// Import MySQL connection.
var connection = require("../config/connection.js");
// function testingIt() {
//   console.log('trying')
// }

// testingIt();

var orm = {

  addGarageVehicle: function (garage_vehicle, cb) {
    var queryString = "INSERT INTO garage_vehicles (garage_vehicle_id, model_id, userid) VALUES ? ";
    connection.query(queryString, [[garage_vehicle]] , (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  // myCourses: function (userid, cb) {
  //   var queryString = "select c.name, c.description, s.signups from users u, course c, users_to_course s where"
  //     + "(u.userid = s.userid) and (c.courseid = s.courseid) and "
  //     + "(s.userid = '" + userid + "')";
  //     console.log("query is " + queryString);
  //   connection.query(queryString, function (err, result) {
  //     if (err) {
  //       throw err;
  //     }
  //    // console.log(result);
  //     cb(result);
      
  //   });
  // },
  addCourse: function (courseid, userid, cb) {
    var queryString = "INSERT INTO users_to_course (userid, courseid) values ("
    +"'" + userid +"', "+ courseid + ")";

    console.log(queryString);

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  
  deleteCourse: function (id, cb) {
    var queryString = "delete from users_to_course where signups = " + id;
  
    console.log(queryString);

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  // updateCourse: function (id, cb) {
  //   var queryString = " update users_to_course set inprogress = 1  where signups = " + id;

  //   console.log(queryString);
  //   connection.query(queryString, function (err, result) {
  //     if (err) {
  //       throw err;
  //     }
  //     cb(result);
  //   });
  // },
  // An example of objColVals would be {name: panther, sleepy: true}
  allCourse: function (cb) {
    var queryString = "select * from course ";

    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  addToCourse: function (name, desc, cb) {
    var queryString = "insert into course (name, description) value ('"+ name +"', '" + desc +"');";

    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;