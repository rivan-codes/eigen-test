'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('books', [
      {
        code: "JK-45",
        title: "Harry Potter",
        author: "J.K Rowling",
        stock: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "SHR-1",
        title: "A Study in Scarlet",
        author: "Arthur Conan Doyle",
        stock: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "TW-11",
        title: "Twilight",
        author: "Stephenie Meyer",
        stock: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "HOB-83",
        title: "The Hobbit, or There and Back Again",
        author: "J.R.R. Tolkien",
        stock: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "NRN-7",
        title: "The Lion, the Witch and the Wardrobe",
        author: "C.S. Lewis",
        stock: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('books', null, {});
  }
};
