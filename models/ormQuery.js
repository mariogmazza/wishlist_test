// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
  addGarageVehicle: function (garage_vehicle, cb) {
    var queryString = "INSERT INTO garage_vehicles (make_year, make, model, sub_model) VALUES ? ";
    connection.query(queryString, [[garage_vehicle]] , (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  deleteGarageVehicle: function (garage_vehicle, cb) {
    var queryString = "DELETE FROM garage_vehicles  WHERE garage_vehicle_id = ? ";
    connection.query(queryString, [garage_vehicle] , (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  deleteAllGarageVehicles: function (garage_vehicle, cb) {
    var queryString = "truncate garage_vehicles;";
    connection.query(queryString, [[garage_vehicle]] , (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  getAllGarageVehicles: function (cb) {
    var queryString = "SELECT * FROM garage_vehicles";
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  getGarageVehicle: function (garage_vehicle, cb) {
    var queryString = "INSERT INTO garage_vehicles (make_year, make, model, sub_model) VALUES ? ";
    connection.query(queryString, [[garage_vehicle]] , (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  getVehicleYears: function (cb) {
    var queryString = "SELECT DISTINCT model_year FROM all_vehicles";
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  getVehicleMakes: function (search_year,cb) {
    var queryString = "SELECT DISTINCT model_make_id FROM all_vehicles WHERE model_year = ? ";
    connection.query(queryString, search_year, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  getVehicleModel: function (theYear, theMake, cb) {
    console.log(theMake,theYear)
    var queryString = "SELECT DISTINCT model_name FROM all_vehicles WHERE model_year = ? AND  model_make_id = ? ORDER BY model_name ASC"
    connection.query(queryString, [theYear, theMake], (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  getVehicleTrim: function (searchTrim, cb) {
    var searchTrimYear = searchTrim.year
    var searchTrimMake = searchTrim.make
    var searchTrimModel = searchTrim.model
    var queryString = "SELECT DISTINCT model_trim FROM all_vehicles WHERE model_year = ? AND  model_make_id = ?  AND model_name = ? ORDER BY model_trim ASC"
    connection.query(queryString, [searchTrimYear, searchTrimMake, searchTrimModel], (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  getAllCategories: function (cb) {
    var queryString = "SELECT DISTINCT catagory_tree FROM tpm_products";
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  getCategoryItems: function (searchCatItem, cb) {
    
   console.log(searchCatItem) 
    var queryString = "SELECT *  FROM tpm_products WHERE catagory_tree = ? "
    connection.query(queryString, searchCatItem, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // OR catagory_tree LIKE '%seat cover%' catagory_tree LIKE 'seat%' 
  getProductList: function (searchCatItem, cb) {
    console.log("I'm loggin from getsubcategoryItems",searchCatItem)
    var queryString;
    function toTitleCase(str) {
      return str.replace(/\w\S*/g, function(txt){
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
  }
  
  console.log('cleaned',toTitleCase(searchCatItem))

    switch(toTitleCase(searchCatItem)) {
      
      case "Interior":
      queryString =  "SELECT * FROM tpm_products WHERE catagory_tree LIKE '%Floor Mat Set%' OR catagory_tree LIKE 'Detailing%' OR catagory_tree LIKE 'seat%' OR catagory_tree LIKE 'dash%' ORDER BY RAND()" 
      break;

      case "Exterior":
      queryString = "I am not a fan of orange.";
      break;

      case "Brackets And Hardware":
      queryString ="SELECT * FROM tpm_products WHERE catagory_tree LIKE '%Seat Mounting Bracket%' OR catagory_tree LIKE '%Seat Riser Kit%' ORDER BY RAND()" ;
      break;

      case "Seat":
      queryString =  "SELECT * FROM tpm_products WHERE catagory_tree LIKE '%Seat Riser Kit%' OR catagory_tree LIKE '%seat%' OR catagory_tree LIKE '%Seat Mounting Bracket%' ORDER BY RAND()" ;
      break;

      case "Seat Cover":
      queryString ="SELECT * FROM tpm_products WHERE catagory_tree LIKE '%Seat Riser Kit%' OR catagory_tree LIKE '%seat%' OR catagory_tree LIKE '%Seat Mounting Bracket%' ORDER BY RAND()" ;
      break;

      

    


      // default:
      // queryString = "SELECT DISPLAY_NAME, MIN(brand) as brand, MIN(image) as image FROM tpm_products WHERE catagory_tree = 'seat' GROUP BY DISPLAY_NAME";
  }
   connection.query(queryString, searchCatItem, (err, result) => {
       if (err) {
         throw err;
       }
       cb(result);
     });
   },
   
  getNavItems:function (searchCatItem, cb) {
     var queryString = "SELECT *  FROM navcategory WHERE navname = ? "
     connection.query(queryString, searchCatItem, (err, result) => {
       if (err) {
         throw err;
       }
       cb(result);
     });
   },

   getCatType:function (searchCatItem, cb) {
    // var queryString = "SELECT *  FROM navcategory WHERE navname = ? "
    var queryString = "SELECT MIN(cattype) as cattype FROM navcategory WHERE navname = ? GROUP BY navname"

    connection.query(queryString, searchCatItem, (err, result) => {
      // if (err) {
      //   console.log(err)
      //   throw err;
      // }
      cb(result);
    });
  },

   getNavItemsTop:function (searchCatItem, cb) {
    var queryString = "SELECT *  FROM navcategory WHERE navname = ? "
    connection.query(queryString, searchCatItem, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  getSecondDisplayItems:function (searchCatItem, cb) {
    var pagesize = 20;
    var pagenumber = 1;
    var thepage = pagesize *(pagenumber - 1)
    var queryString; 
    // = "SELECT *  FROM tpm_products WHERE navname = ? "
console.log(searchCatItem)
switch(searchCatItem) {
    case "Interior":
    queryString =  "SELECT *  FROM tpm_products WHERE name LIKE '%leather%'"
        break;
    case "Orange":
    queryString = "I am not a fan of orange.";
        break;
    case "Apple":
    queryString = "How you like them apples?";
        break;
    default:
    queryString = "I have never heard of that fruit...";
}
    connection.query(queryString, [thepage, pagesize], (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
      console.log(result.affectedRows)
    });
  },


  getDisplayItems:function (searchCatItem, cb) {
    var pagesize = 20;
    var pagenumber = 1;
    var thepage = pagesize *(pagenumber - 1)
    var queryString; 
    // = "SELECT *  FROM tpm_products WHERE navname = ? "

switch(searchCatItem) {
    case "leather cover":
    queryString =  "SELECT *  FROM tpm_products WHERE name LIKE '%leather%' AND catagory_tree = 'seat cover'"
        break;
    case "Orange":
    queryString = "I am not a fan of orange.";
        break;
    case "Apple":
    queryString = "How you like them apples?";
        break;
    default:
    queryString = "I have never heard of that fruit...";
}
    connection.query(queryString, [thepage, pagesize], (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
      console.log(result.affectedRows)
    });
  },

  getSecondDisplayItems:function (searchCatItem, cb) {
    var pagesize = 20;
    var pagenumber = 1;
    var thepage = pagesize *(pagenumber - 1)
    var queryString; 
    // = "SELECT *  FROM tpm_products WHERE navname = ? "
console.log(searchCatItem)
switch(searchCatItem) {
    case "Interior":
    queryString =  "SELECT *  FROM tpm_products WHERE name LIKE '%leather%'"
        break;
    case "Orange":
    queryString = "I am not a fan of orange.";
        break;
    case "Apple":
    queryString = "How you like them apples?";
        break;
    default:
    queryString = "I have never heard of that fruit...";
}
    connection.query(queryString, [thepage, pagesize], (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
      console.log(result.affectedRows)
    });
  },
// `   getVehicleYears: function (garage_vehicle, cb) {
//     var queryString = "INSERT INTO garage_vehicles (make_year, make, model, sub_model) VALUES ? ";
//     connection.query(queryString, [[garage_vehicle]] , (err, result) => {
//       if (err) {
//         throw err;
//       }
//       cb(result);
//    });
//    },
};


  module.exports = orm;



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
  // addCourse: function (courseid, userid, cb) {
  //   var queryString = "INSERT INTO users_to_course (userid, courseid) values ("
  //   +"'" + userid +"', "+ courseid + ")";

  //   console.log(queryString);

  //   connection.query(queryString, function (err, result) {
  //     if (err) {
  //       throw err;
  //     }

  //     cb(result);
  //   });
  // },
  
  // deleteCourse: function (id, cb) {
  //   var queryString = "delete from users_to_course where signups = " + id;
  
  //   console.log(queryString);

  //   connection.query(queryString, function (err, result) {
  //     if (err) {
  //       throw err;
  //     }

  //     cb(result);
  //   });
  // },
  // // An example of objColVals would be {name: panther, sleepy: true}
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
  // // An example of objColVals would be {name: panther, sleepy: true}
  // allCourse: function (cb) {
  //   var queryString = "select * from course ";

  //   console.log(queryString);
  //   connection.query(queryString, function (err, result) {
  //     if (err) {
  //       throw err;
  //     }
  //     cb(result);
  //   });
  // },
  // // An example of objColVals would be {name: panther, sleepy: true}
  // addToCourse: function (name, desc, cb) {
  //   var queryString = "insert into course (name, description) value ('"+ name +"', '" + desc +"');";

  //   console.log(queryString);
  //   connection.query(queryString, function (err, result) {
  //     if (err) {
  //       throw err;
  //     }
  //     cb(result);
  //   });
  // }


// Export the orm object for the model (cat.js).
// d