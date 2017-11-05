"use strict";
module.exports = function(sequelize, DataTypes) {
  var HouseType = sequelize.define(
    "HouseType",
    {
      houseTypeId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: "house_type_id"
      },
      description: {
        type: DataTypes.TEXT,
        field: "description"
      }
    },
    {
      underscored: true,
      underscoredAll: true,
      version: true
    }
  );

  return HouseType;
};
