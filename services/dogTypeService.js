const models = require('../models/');

module.exports = DogTypeService = {
    findAll: () => {
        return new Promise((resolve, reject) => {
            models.DogType.findAll()
                .then((result) => {
                    resolve(result);
                });
        });
    }
};