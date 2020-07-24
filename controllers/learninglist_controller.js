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

  router.put("/api/list/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    learningList.update(
      {
        mastered: req.body.mastered
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
  });

module.exports = router;