'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Rooms', [
       {
         user_id: 1,
         bid_id: 1,
         room_id: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         user_id: 2,
         bid_id: 1,
         room_id: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
       }
     ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Rooms', null, {});
  }
};
