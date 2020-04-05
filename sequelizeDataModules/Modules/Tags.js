const Sequelize = require('sequelize')
const db = require('../config/database')

let Tags = db.define('tags', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    tag: {
        type : Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Tags;