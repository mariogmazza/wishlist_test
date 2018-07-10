const router = require("express").Router();
const vehicleInfo = require("./info");


// // api/booking/books
router.use("/info", vehicleInfo);


module.exports = router;
