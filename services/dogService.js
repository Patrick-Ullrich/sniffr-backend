const models = require('../models/');

module.exports = DogService = {
    findAll: () => {
        return new Promise((resolve, reject) => {
            models.Dog.findAll()
                .then((result) => {
                    resolve(result);
                });
        });
    },
    findById: (dogId) => {
        return new Promise((resolve, reject) => {
            models.Dog.find({
                where: {
                    dog_id: dogId
                }
            }).then((result) => {
                resolve(result);
            });
        });
    },
    create: (dog) => {
        return new Promise((resolve, reject) => {
            models.Dog.create({
                name: dog.name,
                weight: dog.weight,
                height: dog.height,
                age: dog.age,
                careGiverId: dog.careGiverId,
                dogTypeId: dog.dogTypeId,
                adoptionStatus: dog.adoptionStatus
            }).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    },
    update: (dogId, dog) => {
        return new Promise((resolve, reject) => {
            models.Dog.update({
                name: dog.name,
                weight: dog.weight,
                height: dog.height,
                age: dog.age,
                careGiverId: dog.careGiverId,
                dogTypeId: dog.dogTypeId,
                adoptionStatus: dog.adoptionStatus
            }, {
                where: {
                    dog_id: dogId
                }
            }).then(updateCount => {
                resolve();
            }).catch(err => {
                reject(err);
            });
        });
    },
    delete: (dogId) => {
        return new Promise((resolve, reject) => {
            models.Dog.destroy({
                where: {
                    dog_id: dogId
                }
            }).then(count => {
                resolve(count);
            }).catch(err => {
                reject(err);
            })
        });
    }
};