
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

    }, {
        created_at: true,
        updated_at: true
    });
    return category;
};
