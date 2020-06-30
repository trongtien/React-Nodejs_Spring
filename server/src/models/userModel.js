const sequelize = require("../config/sequelize");

module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define(
      "User",
      {
        title: DataTypes.STRING,
        imageUrl: DataTypes.STRING,
        description: DataTypes.TEXT,
        userId: DataTypes.INTEGER,
      },
      {}
    );
    // User.associate = function (models) {
    //   // associations can be defined here
    //   Project.belongsTo(models.User, {
    //     foreignKey: "userId",
    //     onDelete: "CASCADE",
    //   });
    // };
    return Project;
  };
  