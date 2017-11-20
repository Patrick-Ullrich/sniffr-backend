const models = require("../models/");

module.exports = AddressService = {
  findAll: () => {
    return new Promise((resolve, reject) => {
      models.Address.findAll().then(result => {
        resolve(result);
      });
    });
  },
  findById: addressId => {
    return new Promise((resolve, reject) => {
      models.Address
        .find({
          where: {
            address_id: addressId
          }
        })
        .then(result => {
          resolve(result);
        });
    });
  },
  create: address => {
    return new Promise((resolve, reject) => {
      models.Address
        .create({
          addressLine1: address.addressLine1,
          postalCode: address.postalCode,
          city: address.city
        })
        .then(() => {
          resolve();
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  update: (addressId, address) => {
    return new Promise((resolve, reject) => {
      models.Address
        .findOne({ where: { address_id: addressId } })
        .then(function(obj) {
          console.log("ADDRESS");
          console.log(obj);
          if (obj) {
            obj
              .update(address)
              .then(updateCount => {
                resolve();
              })
              .catch(err => {
                reject(err);
              });
          } else {
            AddressService.create(address)
              .then(() => {
                console.log("created address");
                resolve();
              })
              .catch(err => {
                console.log("couldn't create address");
                reject(err);
              });
          }
        })
        .catch(function(err) {
          console.log(err);
          reject(err);
        });

      models.Address
        .update(
          {
            addressLine1: address.addressLine1,
            postalCode: address.postalCode,
            city: address.city
          },
          {
            where: {
              address_id: addressId
            }
          }
        )
        .then(updateCount => {
          resolve();
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  delete: addressId => {
    return new Promise((resolve, reject) => {
      models.Address
        .destroy({
          where: {
            address_id: addressId
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
