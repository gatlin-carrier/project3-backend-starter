var express = require("express");
var router = express.Router();
const Card = require("../models").Card;

// GET users listing.
router.get("/", function(request, response) {
  Card.findAll().then(cards => {
    response.json({ cards });
  });
});

//Create a new User

router.post("/", function(request, response) {
  Card.create(request.body).then(card => {
    response.json({ card });
  });
});

//

module.exports = router;
