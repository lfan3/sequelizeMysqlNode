const Sequelize = require('sequelize')
const db = require('../config/database')

let Logins = db.define('logins', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    login: {
        type : Sequelize.STRING,
        allowNull: false
    },
    email: {
        type : Sequelize.STRING,
        allowNull: false
    },
    password: {
        type : Sequelize.STRING,
        allowNull: false 
    },
    tocken: {
        type : Sequelize.STRING,
        allowNull: false
    }
    //isVerified : {
    //    type : Sequelize.BOOLEAN,
    //    defaultValue : 0
    //}
})

module.exports = Logins;
