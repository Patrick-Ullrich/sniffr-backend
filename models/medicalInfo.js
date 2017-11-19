"use strict";
module.exports = function(sequelize, DataTypes) {
  var MedicalInfo = sequelize.define(
    "MedicalInfo",
    {
      medicalInfoId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        field: "medical_info_id"
      },
      dogId: {
        type: DataTypes.INTEGER,
        field: "dog_id"
      },
      medicalInfoTypeId: {
        type: DataTypes.INTEGER,
        field: "medical_info_type_id"
      },
      info: {
        type: DataTypes.TEXT,
        field: "info",
        validate: {
          len: {
            args: [1, 50],
            msg: "Info length cannot exceed 50 characters."
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

  MedicalInfo.associate = models => {
    MedicalInfo.belongsTo(models.MedicalInfoType, {
      foreignKey: "medicalInfoTypeId"
    });
    MedicalInfo.belongsTo(models.Dog, {
      foreignKey: "dogId"
    });
  };

  return MedicalInfo;
};
