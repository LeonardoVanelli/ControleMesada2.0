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
      through: 'family_users',
      as: 'users',
      foreignKey: 'family_id',
    });
    this.belongsToMany(models.Assignment, {
      through: 'family_assignments',
      as: 'assignments',
      foreignKey: 'family_id',
    });
  }
}

export default Family;
