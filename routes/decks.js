var express = require("express");
var router = express.Router();
const Deck = require("../models").Deck;
const Card = require("../models").Card;
const usersDecks = require("../models").users_decks;

//GET a single Deck with Cards

router.get("/:id", (request, response) => {
  Deck.findByPk(request.params.id, {
    include: [{ model: Card }]
  }).then(deckWithCards => {
    response.json(deckWithCards);
  });
});

// GET all Decks

router.get("/", function(request, response) {
  Deck.findAll().then(decks => {
    response.json({ decks });
  });
});

//POST a new Deck

// router.post("/", function(request, response, next) {
//   Deck.create(request.body).then(deck => {
//     response.json({ deck });
//   });
// });

router.post("/:id", (request, response) => {
  let newDeck = {};
  Deck.create({
    title: request.body.title,
    description: request.body.description
  }).then(deck => {
    newDeck = deck;
    usersDecks
      .create({
        userId: request.params.id,
        deckId: newDeck.id
      })
      .then(createdDeck => {
        response.json({ createdDeck });
      });
  });
});

//DELETE a Deck

router.delete("/:id", (request, response) => {
  Deck.destroy({ where: { id: request.params.id } })
    .then(() => {
      return Deck.findAll();
    })
    .then(decks => {
      response.json({ decks });
    });
});

//UPDATE a Deck

router.put("/:id", (request, response) => {
  Deck.update(
    {
      title: request.body.term,
      description: request.body.definition
    },
    { where: { id: request.params.id }, returning: true }
  ).then(deck => {
    response.json({ deck });
  });
});

module.exports = router;
