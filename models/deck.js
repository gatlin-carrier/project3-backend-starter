"use strict";
module.exports = (sequelize, DataTypes) => {
  const Deck = sequelize.define(
    "Deck",
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING
    },
    {}
  );
  Deck.associate = function(models) {
    Deck.belongsToMany(models.User, {
      through: "users_decks",
      foreignKey: "deckId"
    }),
      Deck.belongsToMany(models.Card, {
        through: "decks_cards",
        foreignKey: "deckId"
      });
  };
  return Deck;
};
