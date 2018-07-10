const router = require("express").Router();
var orm = require('../../models/ormQuery');

router.route("/year").get(function (req, res) {
  console.log("im inside put in inventory");
  orm.getVehicleYears(function (results) {
    // console.log(results)
    res.send(results)
  })
  
});

router.route("/make").post(function (req, res) {
  orm.getVehicleMakes(req.body.year,function (results) {
    var allMakes = []
    results.forEach(function(element) {
      allMakes.push(element.model_make_id);    
    })
   
    res.send(allMakes.sort())
  })
})


router.route("/model").post(function (req, res) {
  console.log(req.body)
  orm.getVehicleModel(req.body.year,req.body.make,function (results) {
    console.log(results)
    var allModels = []
    results.forEach(function(element) {
      allModels.push(element.model_name);    
    })
   
    res.send(allModels)
  })  
})

router.route("/trim").post(function (req, res) {
  console.log(req.body)
  orm.getVehicleTrim(req.body,function (results) {
    console.log(results)
    var allTrims = []
    results.forEach(function(element) {
      allTrims.push(element.model_trim );    
    })
    res.send(allTrims)
  })  
})

router.route("/getcats").get(function (req, res) {
  orm.getAllCategories(function (results) {
    var allCats = []
    results.forEach(function(element) {
      allCats.push(element.catagory_tree );    
    })
    res.send(allCats)
  })  
})

router.route("/catitems").post(function (req, res) {
 
  orm.getCategoryItems(req.body.searchThisCat,function (results) {
    console.log(results.length)
    // var allItems = []
    // results.forEach(function(element) {
    //   allItems.push(element.model_trim );    
    // })
    res.send(results)
  })  
})

//gets items to display
router.route("/getProductList").post(function (req, res) {
  orm.getProductList(req.body.searchThisCat,function (results) {
    console.log(results.length, results[0])
    res.send(JSON.parse(JSON.stringify(results)))
  })  
})

//takes search input and find cattype
router.route("/pullnavitems").post(function (req, res) {
  //Finds out the category to delegate next action
  orm.getCatType(req.body.searchThisCat, function (results) {

    if (results.length < 1){
      res.send('there is nothing')
    } else {

      const catTypeResults = results[0].cattype
      if (catTypeResults == undefined) {
        res.send('results are undefined')
        console.log('results are undefined')
  
      } else if (catTypeResults == 'first') {
        // console.log('this is first')
        orm.getNavItems(req.body.searchThisCat, (results) => {
          res.send(JSON.parse(JSON.stringify(results)))
        })
      } else if (catTypeResults == 'second') {
        // console.log('this is second', results[0])
        orm.getNavItems(req.body.searchThisCat, function (results) {
        var catResults = JSON.parse(JSON.stringify(results))
        res.send(catResults)
        })
  
      } else if (catTypeResults == 'third') {
        // console.log('this is 3rd')
        orm.getNavItems(req.body.searchThisCat, function (results) {
        res.send(JSON.parse(JSON.stringify(results)))
        })
  
      } else if (catTypeResults == 'fourth') {
       
        orm.getNavItems(req.body.searchThisCat, function (results) {
        console.log('this is 4th', results)
        res.send(JSON.parse(JSON.stringify(results)))
  
        })
      } else  {
        res.send('results are undefined')
        console.log('this is the else clause')
      }
    }
  })
})

function nextStep (){
  
}

router.route("/navitemstop").post(function (req, res) {
  orm.getNavItemsTop(req.body.searchThisCat,function (results) {
    res.send(JSON.parse(JSON.stringify(results)))
  })  
})

    
module.exports = router;
