module.exports = (sequelize, DataTypes) => {

    const WishList = sequelize.define("wishlist", {
        wishlist_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dish_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        
    }, {
        freezeTableName: true
    })
    WishList.removeAttribute('id');
    return WishList

}