"use strict";
module.exports = function(sequelize, DataTypes) {
  var Address = sequelize.define(
    "Address",
    {
      addressId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        field: "address_id"
      },
      addressLine1: {
        type: DataTypes.TEXT,
        field: "address_line_1",
        validate: {
          len: {
            args: [0, 100],
            msg: "Address Line 1 length cannot exceed 100 characters."
          }
        }
      },
      postalCode: {
        type: DataTypes.TEXT,
        field: "postal_code",
        validate: {
          is: {
            args: [
              /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i
            ],
            msg: "Postal Code is not in the correct format."
          }
        }
      },
      city: {
        type: DataTypes.TEXT,
        field: "city",
        validate: {
          len: {
            args: [0, 100],
            msg: "City length cannot exceed 100 characters."
          }
        }
      }
    },
    {
      underscored: true,
      underscoredAll: true,
      version: true
    }
  );

  return Address;
};
