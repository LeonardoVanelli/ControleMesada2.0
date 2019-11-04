const { startOfDay } = require('date-fns');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'activities',
      [
        {
          realized_date: startOfDay(new Date()),
          assignment_id: 1,
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          realized_date: startOfDay(new Date()),
          assignment_id: 2,
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          realized_date: startOfDay(new Date()),
          assignment_id: 2,
          user_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('activities', null, {});
  },
};
