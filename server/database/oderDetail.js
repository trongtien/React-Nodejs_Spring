module.exports = (sequelize, DataTypes) => {
    const orderdetail = sequelize.define("orderdetail", {
        order_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: true
    });
    orderdetail.associate = (models) => {
        orderdetail.belongsTo(models.product, { foreignKey: 'product_id' });
    };

    return orderdetail;
};
