// DEPENDENCIES
// =============================================================
var path = require('path');
var _ = require('lodash')
//var friends = require('../data/friends.js');

// ROUTES
// =============================================================
module.exports = function (app) {
  //displays JSON-formatted potential friend matches
  // app.get('/api/friends', function (req, res) {
  //   console.log('hello')
  //   res.send(JSON.stringify (friends, null, 2));
  };

  //displays JSON-formatted potential friend matches
  app.post('/api/friends', function (req, res) {

    var newFriendScores = req.body.scores;
    var scoresArray = [];
    var friendCount = 0;
    var bestie = 0;

    console.log('newFriendsScores:', newFriendScores)
    _.map(newFriendScores, function(scores) {
      scoresArray.push(scores)
    });

    console.log('FriendCount:', friendCount);

  });
};

/*what remains to be coded here is a comparison of the 
new cat's score with those already stored in friends.js
I think you would loop through the various score arrays
and use 2 different variables to compare. The two that 
were closest would create your purrfect match.
*/