const models = require("../models/");

module.exports = HouseService = {
  findAll: () => {
    return new Promise((resolve, reject) => {
      models.House.findAll().then(result => {
        resolve(result);
      });
    });
  },
  findById: houseId => {
    return new Promise((resolve, reject) => {
      models.House
        .find({
          where: {
            house_id: houseId
          }
        })
        .then(result => {
          resolve(result);
        });
    });
  },
  create: house => {
    return new Promise((resolve, reject) => {
      models.House
        .create({
          squareFeet: house.squareFeet,
          houseTypeId: house.houseTypeId
        })
        .then(() => {
          resolve();
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  update: (houseId, house) => {
    return new Promise((resolve, reject) => {
      models.House
        .findOne({ where: { house_id: houseId } })
        .then(function(obj) {
          if (obj) {
            obj
              .update(house)
              .then(updateCount => {
                resolve();
              })
              .catch(err => {
                reject(err);
              });
          } else {
            HouseService.create(house)
              .then(() => {
                resolve();
              })
              .catch(err => {
                reject(err);
              });
          }
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });

      models.House
        .update(
          {
            squareFeet: house.squareFeet,
            houseTypeId: house.houseTypeId
          },
          {
            where: {
              house_id: houseId
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
  delete: houseId => {
    return new Promise((resolve, reject) => {
      models.House
        .destroy({
          where: {
            house_id: houseId
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
