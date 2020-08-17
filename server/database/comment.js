module.exports = (sequelize, DataTypes) => {
    const comment = sequelize.define("comment", {
        comment_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: true
    });
    // comment.hasMany(commentuser, { foreignKey: 'comment_id', sourceKey: 'comment_id' });
    return comment;
};
