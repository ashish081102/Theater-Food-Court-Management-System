module.exports = (sequelize, DataTypes) => {

    const OrdersMaster = sequelize.define("ordersMaster", {
        ordermaster_id: {
            type: DataTypes.STRING, 
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        total_price: {
            type: DataTypes.INTEGER
        },
    }, {
        freezeTableName: true
    })
    OrdersMaster.removeAttribute('id');
    return OrdersMaster

}