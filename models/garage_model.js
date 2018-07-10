// Import the ORM to create functions that will interact with the database.
var orm = require('./ormQuery');


var garageModel = {
    addGarageVehicle: function (vehicle_data, cb) {
        orm.addGarageVehicle(vehicle_data, function (res) {
         // console.log(res);
            cb(res);
        });
    },
    deleteGarageVehicle: function (userid, cb) {
        orm.deleteGarageVehicle(userid, function (res) {
         // console.log(res);
            cb(res);
        });
    },
    deleteAllGarageVehicles: function (userid, cb) {
        orm.deleteAllGarageVehicles(userid, function (res) {
         // console.log(res);
            cb(res);
        });
    },
    updateGarageVehicle: function (courseid, userid, cb) {
        orm.updateGarageVehicle(courseid, userid, function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays. When user completes course
    getAllGarageVehicles: function (id, cb) {
        orm.getAllGarageVehicles(id, function (res) {
            cb(res);
        });
    },
    deleteCourse: function (id, cb) {
        deleteCourse.update(id, function (res) {
            cb(res);
        });
    },
    getGarageVehicle: function (cb) {
        orm.getGarageVehicle(function (res) {
            cb(res);
        });
    },
    getVehicleYear: function (cb) {
        orm.getVehicleYear(function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (snacksController.js).
module.exports = garageModel;