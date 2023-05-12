// const mysql = require('mysql2')

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'juanan',
//   database: 'Twitter',
//   password: 'myPassword'
// });

// // simple query
// connection.query(
//   'SELECT * FROM users',
//   function (err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// )

require('dotenv').config()
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE, 'juanan', 'myPassword', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
})

async function checkDB() {
  try {
    await sequelize.authenticate()
    console.log('Connection succesful')
  } catch (error) {
    throw error
  }
}

async function syncModels () {
  try {
    await sequelize.sync()
    console.log('Models Synchronized! :D')
  } catch (error) {
    throw error
  }
}

module.exports = {
  sequelize,
  checkDB,
  syncModels
}