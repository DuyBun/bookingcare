'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '1234456',
      firstName: 'NGUYEN',
      lastName: 'DUY BUN',
      address: '8 Rue De La Butte Verte, 93160 Noisy Le Grand',
      gender: 1,
      typeRole: 'ROLE',
      keyRole: 'R1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
