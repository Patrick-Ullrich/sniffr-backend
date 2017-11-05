"use strict";
module.exports = function(sequelize, DataTypes) {
  var Incident = sequelize.define(
    "Incident",
    {
      incidentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        field: "incident_id"
      },
      severityTypeId: {
        type: DataTypes.INTEGER,
        field: "severity_type_id"
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
        field: "dog_id"
      },
      requestingPartyId: {
        type: DataTypes.INTEGER,
        field: "requesting_party_id"
      },
      message: {
        type: DataTypes.TEXT,
        field: "message"
      }
    },
    {
      underscored: true,
      underscoredAll: true,
      version: true
    }
  );

  Incident.associate = models => {
    Incident.belongsTo(models.SeverityType, {
      foreignKey: "severityTypeId"
    });
    Incident.belongsTo(models.IncidentType, {
      foreignKey: "incidentTypeId"
    });
    Incident.belongsTo(models.User, {
      foreignKey: "requestingPartyId"
    });
    Incident.belongsTo(models.Dog, {
      foreignKey: "dogId"
    });
    Incident.belongsTo(models.IncidentStatus, {
      foreignKey: "incidentStatusId"
    });
  };

  return Incident;
};
