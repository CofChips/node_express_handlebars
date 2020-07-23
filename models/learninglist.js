const orm = require("../config/orm.js");

const learningList = {
    all: function(cb) {
        orm.selectAll("list", function(res) {
          cb(res);
        });
      },
};

module.exports = learningList;