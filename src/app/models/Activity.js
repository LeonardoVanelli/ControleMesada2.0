import Sequelize, { Model } from 'sequelize';

class Activity extends Model {
  static init(sequelize) {
    super.init(
      {
        realized_date: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Assignment, {
      foreignKey: 'assignment_id',
      as: 'assignment',
    });
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

export default Activity;
