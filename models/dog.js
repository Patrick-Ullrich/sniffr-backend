"use strict";
module.exports = function(sequelize, DataTypes) {
  var Dog = sequelize.define(
    "Dog",
    {
      dogId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        field: "dog_id"
      },
      name: {
        type: DataTypes.TEXT,
        field: "name",
        validate: {
          len: {
            args: [[2, 50]],
            msg: "Name must be between 2 and 50 characters."
          }
        }
      },
      about: {
        type: DataTypes.TEXT,
        field: "about",
        validate: {
          len: {
            args: [[0, 140]],
            msg: "About length cannot exceed 140 characters."
          }
        }
      },
      profileUrl: {
        type: DataTypes.TEXT,
        field: "profile_url"
      },
      weight: {
        type: DataTypes.INTEGER,
        field: "weight",
        validate: {
          isNumeric: {
            args: [true],
            msg: "Weight must be numeric."
          },
          max: {
            args: [999],
            msg: "Weight cannot exceed 999 lb"
          },
          min: {
            args: [0],
            msg: "Weight must be equals or greater than 0."
          }
        }
      },
      height: {
        type: DataTypes.INTEGER,
        field: "height",
        validate: {
          isNumeric: {
            args: [true],
            msg: "Height must be numeric."
          },
          max: {
            args: [500],
            msg: "Height cannot exceed 500cm."
          },
          min: {
            args: [0],
            msg: "Height must be equals or greater than 0."
          }
        }
      },
      age: {
        type: DataTypes.INTEGER,
        field: "age",
        validate: {
          isNumeric: {
            args: [true],
            msg: "Age must be numeric."
          },
          max: {
            args: [999],
            msg: "Age cannot exceed 999 years."
          },
          min: {
            args: [0],
            msg: "Age must be equals or greater than 0."
          }
        }
      },
      careGiverId: {
        type: DataTypes.INTEGER,
        field: "care_giver_id"
      },
      dogTypeId: {
        type: DataTypes.INTEGER,
        field: "dog_type_id"
      },
      adoptionStatus: {
        type: DataTypes.INTEGER,
        field: "adoption_status"
      }
    },
    {
      underscored: true,
      underscoredAll: true,
      version: true
    }
  );

  Dog.associate = models => {
    Dog.belongsTo(models.User, {
      foreignKey: "careGiverId"
    });
    Dog.belongsTo(models.DogType, {
      foreignKey: "dogTypeId"
    });
    Dog.belongsTo(models.AdoptionStatus, {
      foreignKey: "adoptionStatus"
    });
  };

  return Dog;
};
