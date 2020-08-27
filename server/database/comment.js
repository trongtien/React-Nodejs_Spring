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
    // comment.associate = models => {
    //     comment.belongsTo(models.user, {
    //         onDelete: 'CASECADE',
    //         foreignkey: {
    //             allowNull: false
    //         }
    //     })
    // }
    return comment;
};
