'use strict';
module.exports = function (sequelize, DataTypes) {
    var UserType = sequelize.define('UserType', {
        userTypeId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            field: 'incident_type_id'
        },
        description: {
            type: DataTypes.TEXT,
            field: 'description'
        }
    }, {
        underscored: true,
        underscoredAll: true,
        version: true
    });

    return UserType;
};