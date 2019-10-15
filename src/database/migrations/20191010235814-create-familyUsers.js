module.exports = {
  up: (queryInterface, Sequelize) => {
    const Families = queryInterface.createTable('familyUsers', {
      family_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'families',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      provider: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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
    return queryInterface.dropTable('familyUsers');
  },
};
