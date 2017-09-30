const models = require('../models/');

module.exports = UserTypeService = {
    findAll: () => {
        return new Promise((resolve, reject) => {
            models.UserType.findAll()
                .then((result) => {
                    resolve(result);
                });
        });
    }
};