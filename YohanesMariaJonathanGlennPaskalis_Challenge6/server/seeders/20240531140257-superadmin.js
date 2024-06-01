'use strict';

/** @type {import('sequelize-cli').Migration} */

const bcrypt = require("bcrypt");
const { v4 } = require("uuid");


module.exports = {
  async up (queryInterface, Sequelize) {
    const salt = await bcrypt.genSalt();
    return queryInterface.bulkInsert('users', [
      {
        id: v4(),
        name: 'John Doe',
        email: 'johndoe.superadmin@gmail.com',
        password: await bcrypt.hash('12345', salt),
        role: 'superadmin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
