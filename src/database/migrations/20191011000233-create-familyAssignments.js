module.exports = {
  up: (queryInterface, Sequelize) => {
    const Families = queryInterface.createTable('family_assignments', {
      family_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'families',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      assignment_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'assignments',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    Families.associate = models => {
      Families.belongsTo(models.Customer);
      Families.hasMany(models.Product);
    };

    return Families;
  },

  down: queryInterface => {
    return queryInterface.dropTable('familyAssignments');
  },
};
