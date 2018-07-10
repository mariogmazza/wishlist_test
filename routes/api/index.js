const path = require("path");
const router = require("express").Router();
const booking = require("./booking");




// API Routes
//if any api/booking routes are hit send them to the booking folder
router.use("/booking", booking);
//if any api/saving routes are hit send them to the savings folder

// If no API routes are hit, send the React app


module.exports = router;
