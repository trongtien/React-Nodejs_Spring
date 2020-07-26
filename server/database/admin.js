// module.exports = (sequelize, DataTypes) => {
//     const admin = sequelize.define("admin", {
//         admin_id: {
//             type: DataTypes.UUID,
//             primaryKey: true,
//             allowNull: false
//         },
//         level: {
//             type: DataTypes.INTEGER,
//             allowNull: false
//         },
//         avartar: {
//             type: DataTypes.STRING,
//             defaultValue: DataTypes.allowNull,
//             allowNull: true
//         },
//         fullname: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         username: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         password: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 len: [5, 20]
//             }
//         },
//         email: {
//             type: DataTypes.STRING,
//             defaultValue: DataTypes.allowNull,
//             allowNull: true,
//             isEmail: true
//         },
//         phone: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         address: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         created_at: {
//             type: DataTypes.DATE,
//             defaultValue: DataTypes.NOW,
//             allowNull: false
//         },
//         updated_at: {
//             type: DataTypes.DATE,
//             defaultValue: DataTypes.NOW,
//             allowNull: false
//         }
//     }, {
//         createdAt: true,
//         updatedAt: true,
//     });
//     return admin;
// };
