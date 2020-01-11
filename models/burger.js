let orm = require("../config/orm");

let burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb.json(res);
    });
  }
  insertOne: function(cols, vals, cb) {
      orm.selectAll("burgers", function(res){
          cb.json(res);
    });
  }
  updateOne: function(objColVals, condition, cb) {
      orm.selectAll("burgers", objColVals, condition, function(res){
          cb.json(res)
      })
  }
  deleteOne: function(condition, cb){
      orm.selectAll("burgers", condition, function(res){
        cb.json(res)
      })
  }
};

module.exports = burger;
