const models = require('../models/');

module.exports = IncidentTypeService = {
    findAll: () => {
        return new Promise((resolve, reject) => {
            models.IncidentType.findAll()
                .then((result) => {
                    resolve(result);
                });
        });
    }
};