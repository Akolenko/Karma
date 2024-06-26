'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Bids', [{
       title: 'Донести кольцо к роковой горе',
       description: 'Нужно навалять Саурону и оркам и уничтожить кольцо всевластия',
       address: 'г. Шир, ул. Кировская, д. 3',
       status: 'response',
       author_id: 2,
       createdAt: new Date(),
       updatedAt: new Date(),
     },
       {
         title: 'Нужно поймать кота',
         description: 'Кот бегает и гадит в тапки, не могу поймать, помогите',
         address: 'г. Санкт-Петербург, ул. Кировская, д. 15',
         status: 'create',
         author_id: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
       }
     ], {});
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Bid', null, {});
  }
};
