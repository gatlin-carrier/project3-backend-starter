var express = require("express");
var router = express.Router();
const Deck = require("../models").Deck;
const Card = require("../models").Card;
const decksCards = require("../models").decks_cards;

// get all Cards
router.get("/", function(request, response) {
  Card.findAll().then(cards => {
    response.json({ cards });
  });
});

// Get a single Card

router.get("/:id", (request, response) => {
  Card.findByPk(request.params.id).then(card => {
    response.json({ card });
  });
});

// Post a new Card associated with a Deck

router.post("/:id", (request, response) => {
  let newCard = {};
  Card.create({
    term: request.body.term,
    definition: request.body.definition,
    image: request.body.image,
    mastered: request.body.mastered
  }).then(card => {
    newCard = card;
    decksCards
      .create({
        deckId: request.params.id,
        cardId: newCard.id
      })
      .then(createdCard => {
        response.json({ createdCard });
      });
  });
});

// Delete a Card

router.delete("/:id", (request, response) => {
  Card.destroy({ where: { id: request.params.id } })
    .then(() => {
      return Card.findAll({ where: { id: request.params.id } });
    })
    .then(cards => {
      response.json({ cards });
    });
});

// Update a card

router.put("/:id", (request, response) => {
  Card.update(
    {
      term: request.body.term,
      definition: request.body.definition,
      image: request.body.image,
      mastered: request.body.mastered
    },
    { where: { id: request.params.id }, returning: true }
  ).then(card => {
    response.json({ card });
  });
});

// UPDATE for when Card is mastered

// router.put("/:id", (request, response) => {
//   Card.update(
//     {
//       mastered: request.body.mastered
//     },
//     { where: { id: request.params.id }, returning: true }
//   ).then(card => {
//     response.json({ card });
//   });
// });

module.exports = router;
