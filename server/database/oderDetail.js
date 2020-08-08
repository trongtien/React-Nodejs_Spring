module.exports = (sequelize, DataTypes) => {
    const orderdetail = sequelize.define("orderdetail", {
        order_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        product_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        note: {
            type: DataTypes.STRING,
            allowNull: true
        },
    }, {
        timestamps: true
    });
    return orderdetail;
};
