import Sequelize, { Model } from 'sequelize';

class FamilyAssignments extends Model {
  static init(sequelize) {
    super.init(
      {
        family_id: Sequelize.INTEGER,
        assignment_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    FamilyAssignments.removeAttribute('id');

    return this;
  }
}

export default FamilyAssignments;
