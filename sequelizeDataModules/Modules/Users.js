const Sequelize = require('sequelize')
const db = require('../config/database')

let Users = db.define('users', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    age: {
        type : Sequelize.INTEGER,
        allowNull: false
    },
    sex: {
        type : Sequelize.INTEGER,
        allowNull: false
    },
    sex_orien: {
        type : Sequelize.INTEGER,
        allowNull: false 
    },
    geo_loc: {
        type : Sequelize.GEOMETRY,
        allowNull: false
    },
    city : {
        type : Sequelize.STRING,
    },
    intro :{
        type : Sequelize.TEXT,
        allowNull: true
    },
    race : {
        type : Sequelize.STRING,
        allowNull : true
    }
})

module.exports = Users;