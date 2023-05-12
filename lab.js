const { DataTypes } = require('sequelize')
const {sequelize} = require('./db')

const Lab = sequelize.define('lab', {
  text: {
    type: DataTypes.STRING
  },
  block: {
    type: DataTypes.INTEGER
  }
},
  {timestamps: false}
)

module.exports = Lab