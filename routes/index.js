const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const getVehicleRoutes = require("./getVehicle");



// If any api routes are hit send them to the API folder
router.use("/getVehicle", getVehicleRoutes);
router.use("/api", apiRoutes);



// If no API routes are hit, send the React app
router.use(function(req, res) {
    if ( process.env.NODE_ENV === 'development' ) {
      res.sendFile(path.join(__dirname, "../client/public/index.html")) 
  } else {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
  }
});


// router.use('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/client/build/index.html'));
// });
module.exports = router;
