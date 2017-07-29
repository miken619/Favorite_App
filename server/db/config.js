const Sequelize = require('sequelize');

const db = new Sequelize('postgres://muoqdwlk:0uozmBhiN_K97aVf8HQup6QgdVIXqIDJ@pellefant.db.elephantsql.com:5432/muoqdwlk', {
  dialect: 'postgres'  
});

module.exports = db;