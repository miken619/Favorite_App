const db = require('./config');
const Sequelize = require('sequelize');

const User = db.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

const Content = db.define('content', {
  link: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

User.sync();
Content.sync();

module.exports = {
  User,
  Content
};