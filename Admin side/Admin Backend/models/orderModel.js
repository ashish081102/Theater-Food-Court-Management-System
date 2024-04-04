module.exports = (sequelize, DataTypes) => {

    const Orders = sequelize.define("orders", {
        order_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        ordermaster_id: {
            type: DataTypes.STRING,
            allowNull: false

        },
       
        dish_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        order_date: {
            type: DataTypes.DATEONLY
        },
        order_price: {
            type: DataTypes.DECIMAL(11, 10)
        }
    }, {
        freezeTableName: true
    })
    Orders.removeAttribute('id');
    return Orders

}