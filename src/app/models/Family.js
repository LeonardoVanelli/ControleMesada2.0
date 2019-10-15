import Sequelize, { Model } from 'sequelize';

class Family extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.User, {
      foreignKey: 'user_id',
      as: 'users',
      through: 'familyUsers',
    });
    this.belongsToMany(models.Assignment, {
      foreignKey: 'assignment_id',
      as: 'assignments',
      through: 'familyAssignments',
    });
  }
}

export default Family;
