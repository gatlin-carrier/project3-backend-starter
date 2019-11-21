'use strict';
module.exports = (sequelize, DataTypes) => {
  const users_decks = sequelize.define('users_decks', {
    deckId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  users_decks.associate = function(models) {
    // associations can be defined here
  };
  return users_decks;
};