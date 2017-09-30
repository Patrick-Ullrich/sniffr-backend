const models = require('../models/');

module.exports = MedicalInfoService = {
    findAll: () => {
        return new Promise((resolve, reject) => {
            models.MedicalInfo.findAll()
                .then((result) => {
                    resolve(result);
                });
        });
    },
    findById: (medicalInfoId) => {
        return new Promise((resolve, reject) => {
            models.MedicalInfo.find({
                where: {
                    medical_info_id: medicalInfoId
                }
            }).then((result) => {
                resolve(result);
            });
        });
    },
    create: (medicalInfo) => {
        return new Promise((resolve, reject) => {
            models.MedicalInfo.create({
                dogId: medicalInfo.dogId,
                medicalInfoTypeId: medicalInfo.medicalInfoTypeId,
                info: medicalInfo.info
            }).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    },
    update: (medicalInfoId, medicalInfo) => {
        return new Promise((resolve, reject) => {
            models.MedicalInfo.update({
                dogId: medicalInfo.dogId,
                medicalInfoTypeId: medicalInfo.medicalInfoTypeId,
                info: medicalInfo.info
            }, {
                where: {
                    medical_info_id: medicalInfoId
                }
            }).then(updateCount => {
                resolve();
            }).catch(err => {
                reject(err);
            });
        });
    },
    delete: (medicalInfoId) => {
        return new Promise((resolve, reject) => {
            models.MedicalInfo.destroy({
                where: {
                    medical_info_id: medicalInfoId
                }
            }).then(count => {
                resolve(count);
            }).catch(err => {
                reject(err);
            })
        });
    }
};