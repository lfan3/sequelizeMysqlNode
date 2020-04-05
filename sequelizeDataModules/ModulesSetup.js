const Logins = require('./dataModules/Logins')
const Users = require('./dataModules/Users')
const Likes = require('./dataModules/Likes')
const Photos = require('./dataModules/Photos')
const Tags = require('./dataModules/Tags')
const Users_Tags = require('./dataModules/Users_Tags')
const db = require('./config/database')

/*this fichier defines relationships/association bewteen modules */
//USERS VS LIKES(USERS_USERS) M:N
Users.belongsToMany(Users, {as : 'likedUsers', through : Likes})

//USERS VS LOGINS 1:1
Users.hasOne(Logins)
Logins.belongsTo(Users,{
    onDelete: 'CASCADE'
})

//USERS VS PHOTOS 1:N
Users.hasMany(Photos, {
    onDelete: 'CASCADE'
})
Photos.belongsTo(Users)

// USERS VS TAGS M:N with mysql junction table  
Users.belongsToMany(Tags, { through: Users_Tags});
Tags.belongsToMany(Users, { through: Users_Tags});
//Users.belongsToMany(Users, { through: Likes});

// first 
async function multipleTables(){
    try{
        await Users.sync()
        await Likes.sync()
        await Tags.sync()
        await Users_Tags.sync()
        await Photos.sync()
        await Logins.sync()
    } catch(err){
        console.log('creat multiple tables Error :' + err)
    }
}

multipleTables();






