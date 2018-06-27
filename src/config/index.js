require('dotenv').config();

module.exports = {
  appName: 'Simple List App',
  port: 3000,
  db: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host:     process.env.DB_HOST,
    dbName:   process.env.DB_NAME,
  },
};