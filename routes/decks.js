var express = require("express");
var router = express.Router();
const User = require("../models").User;

// GET users listing.
router.get("/", function(request, response, next) {
  User.findAll().then(users => {
    response.json({ users });
  });
});

//Create a new User

router.post("/", function(request, response, next) {
  User.create(request.body).then(user => {
    response.json({ user });
  });
});

//

module.exports = router;
