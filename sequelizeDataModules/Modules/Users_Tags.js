const Sequelize = require('sequelize')
const db = require('../config/database')
const Tags = require('./Tags')
const Users = require('./Users')

let Users_Tags = db.define('users_tags', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    }
})

module.exports = Users_Tags;