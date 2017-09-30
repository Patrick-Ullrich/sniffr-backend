const models = require('../models/');

module.exports = HouseTypeService = {
    findAll: () => {
        return new Promise((resolve, reject) => {
            models.HouseType.findAll()
                .then((result) => {
                    resolve(result);
                });
        });
    }
};