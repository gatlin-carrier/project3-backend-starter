"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Cards",
      [
        {
          term: "der Geist",
          definition: "The Ghost",
          image:
            "https://media.glamour.com/photos/57c5c44b4077bc2910b65596/master/w_1280%2Cc_limit/ghost.jpg",
          mastered: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          term: "der Dämon",
          definition: "The Demon",
          image:
            "https://miro.medium.com/max/1472/1*1e8i4KFLv8IOBTkKtCD08A.jpeg",
          mastered: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          term: "der Grabstein",
          definition: "The Gravestone",
          image:
            "https://media.wired.com/photos/5926a817cefba457b079aba4/master/w_1164,c_limit/GravestoneTA-186755520.jpg",
          mastered: false,
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
