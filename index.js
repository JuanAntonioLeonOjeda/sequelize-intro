const {
  checkDB,
  syncModels
} = require('./db')

const {Op} = require('sequelize')

const User = require('./user')
const Lab = require('./lab')

async function start() {
  await checkDB()
  await syncModels()
  
  // try {
  //   const user = await User.create({
  //     name: 'Pedro',
  //     email: 'pedro@gmail.com',
  //     age: 88,
  //     role: 'admin'
  //   }, {
  //     fields: ['name', 'email', 'age']
  //   })

  //   console.log(`User ${user.name} created!`)
  // } catch (error) {
  //   console.log(error)
  // }

  // try {
  //   const lab = await Lab.create({
  //     text: 'Lab súper pepino',
  //     block: 2
  //   })
    
  //   console.log(`Lab ${lab.text} created!`)
  // } catch (error) {
  //   throw error
  // }

  try {
    const users = await User.findAll({
      where: {
        [Op.and]: [
          {role: 'user'},
          {age: {
            [Op.gt] : 25
          }}
        ]
      }
    })
    if(users.length === 0) {
      console.log('No users found')
    } else {
      console.log(JSON.stringify(users))
    }

  } catch (error) {
    throw error
  }


}

start()