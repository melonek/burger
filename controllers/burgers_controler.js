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
    burger.updateOne({ devoured: req.body.devoured }, condition, function(
      result
    ) {
      if ((result, changeRows === 0)) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  router.deleteOne(condition, function(req, res) {
    let condition = "id = " + req.params.id;
    console.group("condition", condition);

    burger.deleteOne(condition, function(result) {
      if ((result, changeRows === 0)) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
});
module.exports = router;
