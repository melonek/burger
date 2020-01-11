let express = require("express");
let burger = require("../models/burger");

let router = express.Router();

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    let handlebarsObj = {
      burgers: data
    };
    console.log(handlebarsObj);
    res.render("index", handlebarsObj);
  });

  router.post("/api/burgers", function(req, res) {
    burger.insertOne(
      ["burger_name", "devoured"],
      [req.body.burger_name, req.body.devoured],
      function(result) {
        res.json({ id: result.insertId });
      }
    );
  });
  router.put("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);
  });
});
