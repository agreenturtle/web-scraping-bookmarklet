// controller/index.js
// ROUTE = "/"
// =====================================================================
var models = require("../models");

var Index = function(router){
  router.route("/")
    .get(function(req,res) {
      res.render("index/login");
    })

    .post(function(req,res) {
      console.log(req.body.username);
      console.log(req.body.password);
      models.User.findOne( {where:{username: req.body.username} }).then(function(user){
        if( user && user.password == req.body.password){
          console.log("---", user.id);
          req.session.user_id = user.id;
          res.render("admin/index");
        }
        else {
          res.render("index/401");
        }
      })

    })
}

module.exports = Index;
