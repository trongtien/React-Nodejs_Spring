
module.exports = (sequelize, DataTypes) => {
    const categoryblog = sequelize.define("categoryblog", {
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

    }, {
        timestamps: true
    });
    return categoryblog;
};
