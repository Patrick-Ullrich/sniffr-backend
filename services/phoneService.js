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
        .then(() => {
          resolve();
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
          console.log(obj);
          console.log("done searching)");
          if (obj) {
            obj
              .update(phone)
              .then(updateCount => {
                resolve();
              })
              .catch(err => {
                reject(err);
              });
          } else {
            PhoneService.create(phone)
              .then(() => {
                resolve();
              })
              .catch(err => {
                reject(err);
              });
          }
        })
        .catch(function(err) {
          console.log("ERROR:" + err);
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
