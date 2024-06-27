'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Messages', [
      {
        room_id: 1,
        user_id: 1,
        text_message: 'Привет',
        is_read: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_id: 1,
        user_id: 2,
        text_message: 'Здравствуй, готов помочь?',
        is_read: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_id: 1,
        user_id: 1,
        text_message: 'Да, всегда готов!',
        is_read: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Messages', null, {});
  }
};
