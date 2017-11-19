"use strict";
module.exports = function(sequelize, DataTypes) {
  var House = sequelize.define(
    "House",
    {
      houseId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        field: "houseId"
      },
      squareFeet: {
        type: DataTypes.INTEGER,
        field: "square_feet",
        validate: {
          isNumeric: {
            args: [true],
            msg: "Square Feet must be numeric."
          },
          min: {
            args: [1],
            msg: "Square Feet must be equals or greater than 1"
          },
          max: {
            args: [999999],
            msg: "Square Feet cannot exceed 999,999."
          }
        }
      },
      houseTypeId: {
        type: DataTypes.INTEGER,
        field: "house_type_id"
      }
    },
    {
      underscored: true,
      underscoredAll: true,
      version: true
    }
  );

  House.associate = models => {
    House.belongsTo(models.HouseType, {
      foreignKey: "houseTypeId"
    });
  };

  return House;
};
