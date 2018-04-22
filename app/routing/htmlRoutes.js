// DEPENDENCIES
// =============================================================
var path = require('path');

//ROUTES
// =============================================================

module.exports = function(app){
  //create GET route that displays the survey page
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
  });
  /*a catch-all route that leads to and displays home.html
  putting this second because express will stop at the first route
  that works, and with the * ANYTHING will work*/

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });
};
