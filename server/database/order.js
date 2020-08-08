module.exports = (sequelize, DataTypes) => {
    const order = sequelize.define("order", {
        order_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        product_id: {
            type: DataTypes.STRING,
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
    return order;
};
