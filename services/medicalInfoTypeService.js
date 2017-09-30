const models = require('../models/');

module.exports = MedicalInfoTypeService = {
    findAll: () => {
        return new Promise((resolve, reject) => {
            models.MedicalInfoType.findAll()
                .then((result) => {
                    resolve(result);
                });
        });
    }
};