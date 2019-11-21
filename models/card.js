"use strict";
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define(
    "Card",
    {
      term: DataTypes.STRING,
      definition: DataTypes.STRING,
      image: DataTypes.STRING,
      mastered: DataTypes.BOOLEAN
    },
    {}
  );
  Card.associate = function(models) {
    Card.belongsToMany(models.Deck, {
      through: "decks_cards",
      foreignKey: "cardId"
    });
  };
  return Card;
};
