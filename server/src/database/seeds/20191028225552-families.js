const faker = require('faker');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'families',
      [
        {
          name: faker.name.lastName(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: faker.name.lastName(),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('families', null, {});
  },
};
