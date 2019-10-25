import Sequelize, { Model } from 'sequelize';

class FamilyUsers extends Model {
  static init(sequelize) {
    super.init(
      {
        family_id: Sequelize.INTEGER,
        user_id: Sequelize.INTEGER,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
    FamilyUsers.removeAttribute('id');

    return this;
  }
}

export default FamilyUsers;
