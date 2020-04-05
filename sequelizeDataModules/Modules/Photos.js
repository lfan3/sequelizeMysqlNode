const Sequelize = require('sequelize')
const db = require('../config/database')

let Photos = db.define('photos', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    photo: {
        type : Sequelize.STRING,
        allowNull: false
    },
    profile:{ 
        type : Sequelize.BOOLEAN,
        defaultValue : 0  
    }
})

module.exports = Photos;