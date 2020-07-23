const connection = require("./connection.js");

// function selectAll(){};

// function insertOne(){};

// function updateOne(){};

var orm = {
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },

}
module.exports = orm;