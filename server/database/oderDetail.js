module.exports = (sequelize, DataTypes) => {
    const orderdetail = sequelize.define("orderdetail", {
        orderdetailt_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        order_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        // product_name: {
        //     type: DataTypes.STRING,
        //     allowNull: true
        // },
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
    return orderdetail;
};
