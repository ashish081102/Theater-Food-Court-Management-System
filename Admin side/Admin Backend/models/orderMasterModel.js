module.exports = (sequelize, DataTypes) => {

    const OrdersMaster = sequelize.define("ordersMaster", {
        ordermaster_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        total_price: {
            type: DataTypes.DECIMAL(11, 10)
        },
        payemnt_type: {
            type: DataTypes.STRING
        },
        payemnt_status: {
            type: DataTypes.STRING
        }
    }, {
        freezeTableName: true
    })
    OrdersMaster.removeAttribute('id');
    return OrdersMaster

}