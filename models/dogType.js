'use strict';
module.exports = function (sequelize, DataTypes) {
    var DogType = sequelize.define('DogType', {
        dogTypeId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            field: 'dog_type_id'
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

    return DogType;
};