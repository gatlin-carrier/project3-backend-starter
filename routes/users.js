var express = require("express");
var router = express.Router();
const User = require("../models").User;
const Deck = require("../models").Deck;

// GET users listing.
router.get("/", function(request, response, next) {
  User.findAll().then(users => {
    response.json({ users });
  });
});

// CREATE a new User

router.post("/", function(request, response) {
  console.log(request.body);
  User.create({
    first_name: request.body.first_name,
    last_name: request.body.last_name,
    bio: request.body.bio
  }).then(user => {
    response.json({ user });
  });
});

//GET Users with Decks

router.get("/:id", (request, response) => {
  User.findByPk(request.params.id, {
    include: [{ model: Deck }]
  }).then(usersWithDecks => {
    response.json(usersWithDecks);
  });
});

//DELETE a User

router.delete("/:id", (request, response) => {
  User.destroy({ where: { id: request.params.id } })
    .then(() => {
      return User.findAll();
    })
    .then(users => {
      response.json({ users });
    });
});

// UPDATE a User

router.put("/:id", (request, response) => {
  User.update(
    {
      first_name: request.body.first_name,
      last_name: request.body.last_name,
      bio: request.body.bio
    },
    { where: { id: request.params.id }, returning: true }
  ).then(user => {
    response.json({ user });
  });
});

module.exports = router;
