module.exports = (sequelize, DataTypes) => {
    const order = sequelize.define("order", {
        order_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status_order: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        timestamps: true
    });

    order.associate = models => order.hasMany(models.orderdetail)
    return order;
};
