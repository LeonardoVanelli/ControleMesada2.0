const database = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'controlemesada',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

module.exports = database;
