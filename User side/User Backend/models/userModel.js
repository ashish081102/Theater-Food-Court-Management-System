module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("user", {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_mobile_no: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })
    User.removeAttribute('id');
    return User
}