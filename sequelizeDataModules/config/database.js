var Sequelize = require('sequelize');

/*************** data *************/

module.exports = new Sequelize('mat1', 'root', 'roooot', {
    host: "localhost",
    dialect: 'mysql',
    port: '5555',
    define:{
        timestamps : true
    },
    pool: {
        max:10,
        min:0,
        idle:100
    },
})
/*
db.authenticate().then(()=>{
    console.log('Connection');
}).catch(err=>{
    console.error('err ', err);
})*/