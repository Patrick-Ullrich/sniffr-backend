'use strict';
module.exports = function (sequelize, DataTypes) {
    var AdoptionStatus = sequelize.define('AdoptionStatus', {
        adoptionStatusId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            field: 'adoption_status_id'
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

    return AdoptionStatus;
};