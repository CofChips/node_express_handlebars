const express = require("express");

const router = express.Router();

const learningList = require("../models/learninglist.js");

// this is where the routes are located - functions from 'models' are used here

router.get("/", function(req, res) {
    learningList.all(function(data) {
      var hbsObject = {
        learningList: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

module.exports = router;