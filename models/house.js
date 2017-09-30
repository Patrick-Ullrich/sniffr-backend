'use strict';
module.exports = function (sequelize, DataTypes) {
    var House = sequelize.define('House', {
        houseId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            field: 'houseId'
        },
        squareFeet: {
            type: DataTypes.INTEGER,
            field: 'square_feet'
        },
        houseTypeId: {
            type: DataTypes.INTEGER,
            field: 'house_type_id'
        }
    }, {
        underscored: true,
        underscoredAll: true,
        version: true
    });

    // House.associate = models => {
    //     House.belongsTo(models.HouseType, {
    //         foreignKey: 'house_type_id'
    //     });
    // }

    return House;
};