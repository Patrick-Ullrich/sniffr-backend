'use strict';
module.exports = function (sequelize, DataTypes) {
    var Incident = sequelize.define('Incident', {
        incidentId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            field: 'incident_id'
        },
        severityTypeId: {
            type: DataTypes.INTEGER,
            field: 'severity_type_id'
        },
        incidentTypeId: {
            type: DataTypes.INTEGER,
            field: "incident_type_id"
        },
        incidentStatusId: {
            type: DataTypes.INTEGER,
            field: "incident_status_id"
        },
        dogId: {
            type: DataTypes.INTEGER,
            field: 'dog_id'
        },
        requestingPartyId: {
            type: DataTypes.INTEGER,
            field: "requesting_party_id"
        },
        message: {
            type: DataTypes.TEXT,
            field: 'message'
        }
    }, {
        underscored: true,
        underscoredAll: true,
        version: true
    });

    Incident.associate = models => {
        Incident.belongsTo(models.SeverityType, {
            foreignKey: 'severity_type_id'
        });
        Incident.belongsTo(models.IncidentType, {
            foreignKey: 'incident_type_id'
        });
        Incident.belongsTo(models.User, {
            foreignKey: 'requesting_party_id'
        });
        Incident.belongsTo(models.Dog, {
            foreignKey: 'dog_id'
        });
        Incident.belongsTo(models.IncidentStatus, {
            foreignKey: 'incident_status_id'
        });
    }

    return Incident;
};