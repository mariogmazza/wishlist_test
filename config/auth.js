// config/auth.js
// changed call back address
// expose our config directly to our application using module.exports

require('dotenv').config()
module.exports = {

    'facebookAuth' : {
        'clientID'        : process.env.FB_CLIENT_ID,
        'clientSecret'    : process.env.FB_CLIENT_SECRET,
        'callbackURL'     : process.env.FB_CALL_BACK_URL,
        'profileURL'      : process.env.FB_PROFILE_URL

    },

    'twitterAuth' : {
        'consumerKey'        : process.env.TWIT_CONSUMER_KEY,
        'consumerSecret'     : process.env.TWIT_CONSUMER_SECRET,
        'callbackURL'        : process.env.TWIT_CALL_BACK_UR
    },

    'googleAuth' : {
        'clientID'        : process.env.GOOGLE_CLIENT_ID,
        'clientSecret'    : process.env.GOOGLE_CLIENT_SECRET,
        'callbackURL'     : process.env.GOOGLE_CALL_BACK_URL,
        
    },
    
    'url' : {"link": process.env.MONGODB_LINK
    }
};





