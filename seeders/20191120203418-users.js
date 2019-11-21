"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          first_name: "Gatlin",
          last_name: "Carrier",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: "Aisha",
          last_name: "Laghmani",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: "Jason",
          last_name: "Henderson",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: "Juanisha",
          last_name: "Crosson",
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
