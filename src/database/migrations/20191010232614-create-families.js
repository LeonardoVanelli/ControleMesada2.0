module.exports = {
  up: (queryInterface, Sequelize) => {
    const Families = queryInterface.createTable('families', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
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
      Families.belongsToMany(models.Users, {
        through: 'familyUsers',
        as: 'users',
        foreignKey: 'user_id',
      });
    };

    return Families;
  },

  down: queryInterface => {
    return queryInterface.dropTable('families');
  },
};
