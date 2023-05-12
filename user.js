const { DataTypes } = require('sequelize')
const {sequelize} = require('./db')

const User = sequelize.define('user', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isLongerThanThree (value) {
        if (value.length < 3) {
          throw new Error('Error: name must be at least 3 characters long')
        }
      }
    }
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 18
      // isInt: true
    }
  },
  role: {
    type: DataTypes.ENUM('user', 'admin'),
    defaultValue: 'user'
  }
},
  {timestamps: false}
)

module.exports = User