//set up a socket connection on the client side
//the install was set on the server side
import axios from "axios";
import openSocket from 'socket.io-client';
var socket;
  if ( process.env.NODE_ENV === 'production' ) {
socket = openSocket(`${process.env.PUBLIC_URL}`)
  } else {
     socket = openSocket('http://localhost:5000');
  }

export default {
 

  getFirstMessage: function(user,cb) {
    socket.emit('firstMessage', {message:`Hello ${user.chatUserName}! You are now being connected to our LiveChat. Please wait while we connect you to a Product Specialist.`, handle:'System', time: new Date().toLocaleTimeString(), requestingUser:user.chatUserName, requestingEmail:user.clientEmail, requestingPhone:user.clientPhone });

    socket.on('firstMessage', message => cb(null, message));
  },

  secondMessage: function(user,cb) {
    // `${translation}`
    console.log(user,cb)
    socket.emit('chat', user);
    socket.on('chat', message => cb(null, message));
  
    
  }, getSocket: function(){
    // socket.on('chat', function(data) {
    //   console.log('data fro  a')
    // });
    return socket
  },
  acceptedChatReply:function (chartRequestClient,productSpecialist) {
    var data = {chartRequestClient,productSpecialist}
    socket.emit('chat', {message:`Hello I'm ${productSpecialist} a product specialist. How may I help you.`, handle:`${productSpecialist}`, time: new Date().toLocaleTimeString()});
    
  },  getYear: function () {
    // console.log("update date helper",id,theStates);
    return axios.get("/getVehicle/info/year", {
     
    }).then(function (results) {
      
      var totalYears = []
      results.data.forEach(function(element) {
        totalYears.push(element.model_year);    
      })
      console.log('the sorted years are',totalYears)
      return totalYears;
    
      }).catch(function (error) {
        console.log(error);
      });
  }, getMake: function (year) {
    console.log('sending year from api', year)
    return axios.post("/getVehicle/info/make/", {
        year
    })
      .then(function (results) {
        var sortedMakes = []
        results.data.forEach(function (element) {
          sortedMakes.push({ key: element, text: element, value: element })
        })
        // console.log('results from get makes', results)
        // var sortedYears = []
        // results.data.forEach(function(element) {
        //   sortedYears.push(element.model_year);    
        // })
        console.log(sortedMakes)

        return sortedMakes;
        // console.log('the sorted years are',sortedYears)
      }).catch(function (error) {
        console.log(error);
      });
  },  getModel: function (year,make) {

    return axios.post("/getVehicle/info/model/", {
        year,make
    })
      .then(function (results) {
        var sortedModels = []
        results.data.forEach(function (element) {
          sortedModels.push({ key: element, text: element, value: element })
        })
        // console.log('results from get makes', results)
        // var sortedYears = []
        // results.data.forEach(function(element) {
        //   sortedYears.push(element.model_year);    
        // })
        console.log(sortedModels)

        return sortedModels;
        // console.log('the sorted years are',sortedYears)
      }).catch(function (error) {
        console.log(error);
      });
  },   
  getTrim: function (year,make, model) {
    return axios.post("/getVehicle/info/trim/", {
        year,make, model
    })
      .then(function (results) {
        var sortedTrim = []
        results.data.forEach(function (element) {
          sortedTrim.push({ key: element, text: element, value: element })
        })
        return sortedTrim;
      }).catch(function (error) {
        console.log(error);
      });
  }, 
  getCats: function () {
    return axios.get("/getVehicle/info/getcats/", {
    })
      .then(function (results) {
        console.log(results)
        return results;
      }).catch(function (error) {
        console.log(error);
      });
  },  
  getProductList: function (searchThisCat) {
    return axios.post("/getVehicle/info/getProductList/", {
      searchThisCat
    })
      .then(function (results) {
        // var sortedTrim = []
        // results.data.forEach(function (element) {
        //   sortedTrim.push({ key: element, text: element, value: element })
        // })

        return results;
      }).catch(function (error) {
        console.log(error);
      });
  }, 
   getItemsFromCat: function (searchThisCat) {
    return axios.post("/getVehicle/info/catitems/", {
      searchThisCat
    })
      .then(function (results) {
        // var sortedTrim = []
        // results.data.forEach(function (element) {
        //   sortedTrim.push({ key: element, text: element, value: element })
        // })
        return results;
      }).catch(function (error) {
        console.log(error);
      });
  }, 
    getNavItems: function (searchThisCat) {
    return axios.post("/getVehicle/info/pullnavitems/", {
      searchThisCat
    }).then(function (results) {
        console.log('results at api',results)
        return results;
      }).catch((error) => console.log(error));
    }, 
  getNavItemsTop: function (searchThisCat) {
    return axios.post("/getVehicle/info/navitemstop/", {
      searchThisCat
    })
      .then(function (results) {
        return results;
      }).catch(function (error) {
        console.log(error);
      });
  }, 

}
   // subscribeToTimer: function(cb) {
  //   socket.on('timer', timestamp => cb(null, timestamp));
  //   socket.emit('subscribeToTimer', 1000);
  // },

  // getOtherMessage: function(cb) {
  //   socket.on('chat', message => cb(null, message));
  //   // socket.emit('Wakeup');
  // },

  // foundData: function(cb) {
  //   socket.on('retreivedData', theData => cb(null, theData));
  //   // socket.emit('Wakeup');
  // },
  // changeBgc: function(cb) {
  //   socket.on('changeBgc1', data => cb(null, data));
  //   // socket.emit('Wakeup');
  // }, 
  // insertImage: function(cb) {
  //   socket.on('images', data => cb(null, data));
  //   // socket.emit('Wakeup');
  // }
 


//  subscribeToTimer :function (cb) {
//   // socket.on('timer', timestamp => cb(null, timestamp));
//   socket.emit('chatMessage', {message:"Hello World We are Here"});
//   socket.on('chatBack', (data)=>{
//     var message = data.message1
//     cb(null,message)
//   } )
// }
//  deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },






// const io = require('socket.io-client')

// const socket = io.connect('http://localhost:3000')

// function registerHandler(onMessageReceived) {
//   socket.on('message', onMessageReceived)
// }

// function unregisterHandler() {
//   socket.off('message')
// }

// socket.on('error', function (err) {
//   console.log('received socket error:')
//   console.log(err)
// })

// function register(name, cb) {
//   socket.emit('register', name, cb)
// }

// function join(chatroomName, cb) {
//   socket.emit('join', chatroomName, cb)
// }

// function leave(chatroomName, cb) {
//   socket.emit('leave', chatroomName, cb)
// }

// function message(chatroomName, msg, cb) {
//   socket.emit('message', { chatroomName, message: msg }, cb)
// }

// function getChatrooms(cb) {
//   socket.emit('chatrooms', null, cb)
// }

// function getAvailableUsers(cb) {
//   socket.emit('availableUsers', null, cb)
// }








// google-maps-react