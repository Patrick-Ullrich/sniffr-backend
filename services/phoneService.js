const models = require("../models/");

module.exports = PhoneService = {
  findAll: () => {
    return new Promise((resolve, reject) => {
      models.Phone.findAll().then(result => {
        resolve(result);
      });
    });
  },
  findById: phoneId => {
    return new Promise((resolve, reject) => {
      models.Phone
        .find({
          where: {
            phone_id: phoneId
          }
        })
        .then(result => {
          resolve(result);
        });
    });
  },
  create: phone => {
    return new Promise((resolve, reject) => {
      models.Phone
        .create({
          phoneNumber: phone.phoneNumber
        })
        .then(obj => {
          resolve(obj);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  update: (phoneId, phone) => {
    return new Promise((resolve, reject) => {
      models.Phone
        .findOne({ where: { phone_id: phoneId } })
        .then(function(obj) {
          if (obj) {
            obj
              .update(phone)
              .then(updateCount => {
                resolve(phone);
              })
              .catch(err => {
                reject(err);
              });
          } else {
            PhoneService.create(phone)
              .then(obj => {
                resolve(obj);
              })
              .catch(err => {
                reject(err);
              });
          }
        })
        .catch(function(err) {
          console.log(err);
          reject(err);
        });
    });
  },
  delete: phoneId => {
    return new Promise((resolve, reject) => {
      models.Phone
        .destroy({
          where: {
            phone_id: phoneId
          }
        })
        .then(count => {
          resolve(count);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
