const models = require('../models/');

module.exports = IncidentStatusService = {
    findAll: () => {
        return new Promise((resolve, reject) => {
            models.IncidentStatus.findAll()
                .then((result) => {
                    resolve(result);
                });
        });
    }
};