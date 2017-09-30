const models = require('../models/');

module.exports = SeverityTypeService = {
    findAll: () => {
        return new Promise((resolve, reject) => {
            models.SeverityType.findAll()
                .then((result) => {
                    resolve(result);
                });
        });
    }
};