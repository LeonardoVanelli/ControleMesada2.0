const faker = require('faker');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'admin',
        email: 'admin@admin.com',
        password_hash:
          '$2a$08$isAgsrhaa8DifxHCQwLRF.IPHI4BNe6jx2ox6vBO5qhgSw4YMRO62',
        created_at: new Date(),
        updated_at: new Date(),
        provider: true,
      },
      {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password_hash:
          '$2a$08$OLR/H4Aptla3uYAnTCcINuDhEkg49cA8MdVvELHo2Dwa8X0oB7MA2',
        created_at: new Date(),
        updated_at: new Date(),
        provider: false,
      },
      {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password_hash:
          '$2a$08$2LZ3VTV7WLncuwOHkghYj.lEiqXPgM7y7olCGurFy1u0ZUFuY2QNe',
        created_at: new Date(),
        updated_at: new Date(),
        provider: false,
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
