module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'family_users',
      [
        {
          family_id: 1,
          user_id: 1,
          provider: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          family_id: 1,
          user_id: 2,
          provider: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          family_id: 2,
          user_id: 3,
          provider: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('family_users', null, {});
  },
};
