import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import User from '../app/models/User';

const Models = [User];

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
