
module.exports = (sequelize, DataTypes) => {
    const Ticket = sequelize.define("ticket", {
        ticket_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_mobile: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        user_seat: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_screen: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    Ticket.removeAttribute('id');
    return Ticket
}