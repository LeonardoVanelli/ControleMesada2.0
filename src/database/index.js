import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import User from '../app/models/User';
import Family from '../app/models/Family';
import Assignment from '../app/models/Assignment';
import Activity from '../app/models/Activity';

const Models = [User, Family, Assignment, Activity];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.Connection = new Sequelize(databaseConfig);

    Models.map(model => model.init(this.Connection)).map(
      model => model.associate && model.associate(this.Connection.models)
    );
  }
}

export default new Database();
