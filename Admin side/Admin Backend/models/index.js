const dbConfig = require('../config/dbConfig.js');

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle

    }
}
)

sequelize.authenticate()
    .then(() => {
        console.log('connected..')
    })
    .catch(err => {
        console.log('Error' + err)
    })

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.category = require('./categoryModel.js')(sequelize, DataTypes)
db.dishes = require('./dishesModel.js')(sequelize, DataTypes)
db.admin = require('./adminModel.js')(sequelize, DataTypes)
db.user = require('./userModel.js')(sequelize, DataTypes)
db.orderMaster = require('./orderMasterModel')(sequelize, DataTypes)
db.order = require('./orderModel')(sequelize, DataTypes)
db.cart = require('./cartModel.js')(sequelize, DataTypes)
db.wishlist = require('./wishlistModel.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('yes re-sync done!')
    })



// 1 to Many Relation

db.category.hasMany(db.dishes, {
    foreignKey: 'category_id',
    // as: 'cateogry'
})

db.dishes.belongsTo(db.category, {
    foreignKey: 'category_id',
    // as: 'category'
})

db.user.hasMany(db.orderMaster, {
    foreignKey: 'user_id',
    // as: 'orderMaster'
})

db.orderMaster.belongsTo(db.user, {
    foreignKey: 'user_id',
    // as: 'user'
})

db.orderMaster.hasMany(db.order, {
    foreignKey: 'ordermaster_id',
    // as: 'orders'
})

db.order.belongsTo(db.orderMaster, {
    foreignKey: 'ordermaster_id',
    // as: 'orderMaster',
})

db.dishes.hasMany(db.order, {
    foreignKey: 'dish_id',
    // as: 'orders',
})

db.order.belongsTo(db.dishes, {
    foreignKey: 'dish_id',
    // as: 'dishes'
});

db.dishes.hasMany(db.cart, {
    foreignKey: 'dish_id',
})
db.cart.belongsTo(db.dishes, {
    foreignKey: 'dish_id',
})

db.user.hasMany(db.cart, {
    foreignKey: 'user_id',
})

db.cart.belongsTo(db.user, {
    foreignKey: 'user_id',
})

db.dishes.hasMany(db.wishlist, {
    foreignKey: 'dish_id',
})

db.wishlist.belongsTo(db.dishes, {
    foreignKey: 'dish_id',
})
db.user.hasMany(db.wishlist, {
    foreignKey: 'user_id',
})

db.wishlist.belongsTo(db.dishes, {
    foreignKey: 'dish_id',
})


module.exports = db
