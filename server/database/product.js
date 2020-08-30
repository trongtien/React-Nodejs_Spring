module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define("product", {
        product_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        discount: {
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.INTEGER,
        },
        quantity: {
            type: DataTypes.INTEGER
        },
        image: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.INTEGER,
        },
        content: {
            type: DataTypes.TEXT,
        },
        category_id: {
            type: DataTypes.INTEGER,
        },
    }, {
        timestamps: false
    });

    product.associate = (models) => {
        product.belongsTo(models.orderdetail, { foreignKey: 'product_id', as: 'product', constraints: false, allowNull: true, defaultValue: null });
    };
    return product;
};
