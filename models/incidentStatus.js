'use strict';
module.exports = function (sequelize, DataTypes) {
    var IncidentStatus = sequelize.define('IncidentStatus', {
        incidentStatusId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            field: 'incident_status_id'
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

    return IncidentStatus;
};