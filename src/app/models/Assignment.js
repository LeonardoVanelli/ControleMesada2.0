import Sequelize, { Model } from 'sequelize';

class Assignment extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        value: Sequelize.REAL,
        disabled: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Family, {
      through: 'familyAssignments',
      as: 'families',
      foreignKey: 'assignment_id',
    });
  }
}

export default Assignment;
