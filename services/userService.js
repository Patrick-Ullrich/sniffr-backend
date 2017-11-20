const models = require("../models/");
const addressService = require("./addressService");
const houseService = require("./houseService");
const phoneService = require("./phoneService");

module.exports = UserService = {
  findAll: params => {
    return new Promise((resolve, reject) => {
      var where = null;
      if (params.userTypeId) {
        where = {
          where: {
            userTypeId: params.userTypeId
          },
          include: [models.Dog, models.Address, models.Phone, models.House]
        };
      }
      models.User
        .findAll(
          where || {
            include: [models.Dog, models.Address, models.Phone, models.House]
          }
        )
        .then(result => {
          resolve(result);
        });
    });
  },
  findById: userId => {
    return new Promise((resolve, reject) => {
      models.User
        .find({
          where: {
            user_id: userId
          },
          include: [models.Dog, models.Address, models.Phone, models.House]
        })
        .then(result => {
          resolve(result);
        });
    });
  },
  create: user => {
    return new Promise((resolve, reject) => {
      models.User
        .create({
          firstName: user.firstName,
          auth0Key: user.auth0Key,
          lastName: user.lastName,
          userTypeId: user.userTypeId,
          addressId: user.addressId,
          phoneId: user.phoneId,
          houseId: user.houseId
        })
        .then(() => {
          resolve();
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  update: (userId, user) => {
    return new Promise((resolve, reject) => {
      phoneService
        .update(user.phoneId, user.Phone)
        .then(phone => {
          console.log("phone created: " + phone);
          addressService
            .update(user.addressId, user.Address)
            .then(address => {
              console.log("address created: " + address);
              houseService
                .update(user.houseId, user.House)
                .then(house => {
                  console.log("house created:" + house);
                  models.User
                    .update(
                      {
                        auth0Key: user.auth0Key,
                        userTypeId: user.userTypeId,
                        addressId: address.addressId,
                        phoneId: phone.phoneId,
                        houseId: house.houseId,
                        firstName: user.firstName,
                        lastName: user.lastName
                      },
                      {
                        where: {
                          user_id: userId
                        }
                      }
                    )
                    .then(updateCount => {
                      console.log("User created");
                      resolve();
                    })
                    .catch(err => {
                      console.log("user failed" + err);
                      reject(err);
                    });
                })
                .catch(err => {
                  console.log("house failed" + err);
                  addressService.delete(address.addressId);
                  phoneService.delete(phone.deleteId);
                  reject(err);
                });
            })
            .catch(err => {
              console.log("address failed" + err);
              phoneService.delete(phone.deleteId);
              reject(err);
            });
        })
        .catch(err => {
          console.log("phone failed" + err);
          reject(err);
        });
    });
  },
  delete: userId => {
    return new Promise((resolve, reject) => {
      models.User
        .destroy({
          where: {
            user_id: userId
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
