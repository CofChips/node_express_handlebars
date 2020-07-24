const orm = require("../config/orm.js");

const learningList = {
  all: function (cb) {
    orm.selectAll("list", function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.updateOne("list", objColVals, condition, function (res) {
      cb(res);
    });
  },
  insert: function(cols, vals, cb) {
    orm.insertOne("list", cols, vals, function(res) {
      cb(res);
    });
  },
  delete: function(vals, cb) {
    orm.deleteOne("list", vals, function(res) {
      cb(res);
    });
  }
};

module.exports = learningList;