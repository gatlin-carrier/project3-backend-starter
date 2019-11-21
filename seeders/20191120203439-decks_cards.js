"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "decks_cards",
      [
        {
          deckId: 1,
          cardId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          deckId: 1,
          cardId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          deckId: 1,
          cardId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
