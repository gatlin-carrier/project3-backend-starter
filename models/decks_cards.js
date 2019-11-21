'use strict';
module.exports = (sequelize, DataTypes) => {
  const decks_cards = sequelize.define('decks_cards', {
    deckId: DataTypes.INTEGER,
    cardId: DataTypes.INTEGER
  }, {});
  decks_cards.associate = function(models) {
    // associations can be defined here
  };
  return decks_cards;
};