'use strict';
module.exports = function (sequelize, DataTypes) {
    var Address = sequelize.define('Address', {
        addressId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            field: 'address_id'
        },
        addressLine1: {
            type: DataTypes.TEXT,
            field: 'address_line_1'
        },
        postalCode: {
            type: DataTypes.TEXT,
            field: 'postal_code'
        },
        city: {
            type: DataTypes.TEXT,
            field: 'city'
        }
    }, {
        underscored: true,
        underscoredAll: true,
        version: true
    });

    return Address;
};