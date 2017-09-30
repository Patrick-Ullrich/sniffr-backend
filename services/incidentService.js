const models = require('../models/');

module.exports = IncidentService = {
    findAll: () => {
        return new Promise((resolve, reject) => {
            models.Incident.findAll()
                .then((result) => {
                    resolve(result);
                });
        });
    },
    findById: (incidentId) => {
        return new Promise((resolve, reject) => {
            models.Incident.find({
                where: {
                    incident_id: incidentId
                }
            }).then((result) => {
                resolve(result);
            });
        });
    },
    create: (incident) => {
        return new Promise((resolve, reject) => {
            models.Incident.create({
                severityTypeId: incident.severityTypeId,
                incidentTypeId: incident.incidentTypeId,
                incidentStatusId: incident.incidentStatusId,
                dogId: incident.dogId,
                requestingPartyId: incident.requestingPartyId
            }).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    },
    update: (incidentId, incident) => {
        return new Promise((resolve, reject) => {
            models.Incident.update({
                severityTypeId: incident.severityTypeId,
                incidentTypeId: incident.incidentTypeId,
                incidentStatusId: incident.incidentStatusId,
                dogId: incident.dogId,
                requestingPartyId: incident.requestingPartyId
            }, {
                where: {
                    incident_id: incidentId
                }
            }).then(updateCount => {
                resolve();
            }).catch(err => {
                reject(err);
            });
        });
    },
    delete: (incidentId) => {
        return new Promise((resolve, reject) => {
            models.Incident.destroy({
                where: {
                    incident_id: incidentId
                }
            }).then(count => {
                resolve(count);
            }).catch(err => {
                reject(err);
            })
        });
    }
};