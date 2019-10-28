module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'family_assignments',
      [
        {
          family_id: 1,
          assignment_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          family_id: 1,
          assignment_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          family_id: 2,
          assignment_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('family_assignments', null, {});
  },
};
