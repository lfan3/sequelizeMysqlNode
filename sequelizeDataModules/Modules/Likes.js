const Sequelize = require('sequelize')
const db = require('../config/database')

let Likes = db.define('likes', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    }
})

module.exports = Likes;