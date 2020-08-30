
module.exports = (sequelize, DataTypes) => {
    const category = sequelize.define("category", {
        category_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // createdAt: {
        //     type: DataTypes.Date,
        //     allowNull: true
        // },
        // updateAt: {
        //     type: DataTypes.Date,
        //     allowNull: true
        // }
    }, {
        timestamps: false
    });
    return category;
};
