'use strict';
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            field: 'user_id'
        },
        firstName: {
            type: DataTypes.STRING,
            field: 'first_name'
        },
        lastName: {
            type: DataTypes.STRING,
            field: 'last_name'
        },
        userTypeId: {
            type: DataTypes.INTEGER,
            field: 'user_type_id'
        },
        addressId: {
            type: DataTypes.INTEGER,
            field: 'address_id'
        },
        phoneId: {
            type: DataTypes.INTEGER,
            field: 'phone_id'
        },
        houseId: {
            type: DataTypes.INTEGER,
            field: 'house_id'
        }
    }, {
        underscored: true,
        underscoredAll: true,
        version: true
    });

    // User.associate = models => {
    //     User.belongsTo(models.Address, {
    //         foreignKey: 'address_id'
    //     });
    //     User.belongsTo(models.Phone, {
    //         foreignKey: 'phone_id'
    //     });
    //     User.belongsTo(models.UserType, {
    //         foreignKey: 'user_type_id'
    //     });
    //     User.belongsTo(models.House, {
    //         foreignKey: 'house_id'
    //     });
    // }

    return User;
};