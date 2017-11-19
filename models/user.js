"use strict";
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define(
    "User",
    {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        field: "user_id"
      },
      auth0Key: {
        type: DataTypes.STRING,
        field: "auth0_key"
      },
      firstName: {
        type: DataTypes.STRING,
        field: "first_name",
        validate: {
          len: {
            args: [2, 50],
            msg: "First Name must be between 2 and 50 characters."
          }
        }
      },
      lastName: {
        type: DataTypes.STRING,
        field: "last_name",
        validate: {
          len: {
            args: [2, 50],
            msg: "Last Name must be between 2 and 50 characters."
          }
        }
      },
      userTypeId: {
        type: DataTypes.INTEGER,
        field: "user_type_id"
      },
      addressId: {
        type: DataTypes.INTEGER,
        field: "address_id"
      },
      phoneId: {
        type: DataTypes.INTEGER,
        field: "phone_id"
      },
      houseId: {
        type: DataTypes.INTEGER,
        field: "house_id"
      }
    },
    {
      underscored: true,
      underscoredAll: true,
      version: true
    }
  );

  User.associate = models => {
    User.hasMany(models.Dog, {
      foreignKey: "careGiverId"
    });
    User.belongsTo(models.Address, {
      foreignKey: "addressId"
    });
    User.belongsTo(models.Phone, {
      foreignKey: "phoneId"
    });
    User.belongsTo(models.UserType, {
      foreignKey: "userTypeId"
    });
    User.belongsTo(models.House, {
      foreignKey: "houseId"
    });
  };

  return User;
};
