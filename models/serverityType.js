'use strict';
module.exports = function (sequelize, DataTypes) {
    var SeverityType = sequelize.define('SeverityType', {
        severityTypeId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            field: 'severity_type_id'
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

    return SeverityType;
};