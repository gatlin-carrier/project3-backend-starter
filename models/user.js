"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      bio: DataTypes.TEXT
    },
    {}
  );
  User.associate = function(models) {
    User.belongsToMany(models.Deck, {
      through: "users_decks",
      foreignKey: "userId"
    });
  };
  return User;
};
