module.exports = {
  up: async queryInterface => {
    return queryInterface.bulkInsert(
      'assignments',
      [
        {
          name: 'Lavar a louça',
          value: 5.8,
          disabled: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Arrumar a cama',
          value: 5.8,
          disabled: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Lavar a louça',
          value: 3.3,
          disabled: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('assignments', null, {});
  },
};
