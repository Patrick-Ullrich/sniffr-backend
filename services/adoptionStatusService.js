const models = require('../models/');

module.exports = AdoptionStatusService = {
    findAll: () => {
        return new Promise((resolve, reject) => {
            models.AdoptionStatus.findAll()
                .then((result) => {
                    resolve(result);
                });
        });
    }
};