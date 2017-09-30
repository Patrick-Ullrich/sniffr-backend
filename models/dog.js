'use strict';
module.exports = function (sequelize, DataTypes) {
    var Dog = sequelize.define('Dog', {
        dogId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            field: 'dog_id'
        },
        name: {
            type: DataTypes.TEXT,
            field: 'name'
        },
        profileUrl: {
            type: DataTypes.TEXT,
            field: 'profile_url'
        },
        weight: {
            type: DataTypes.INTEGER,
            field: 'weight'
        },
        height: {
            type: DataTypes.INTEGER,
            field: 'height'
        },
        age: {
            type: DataTypes.INTEGER,
            field: 'age'
        },
        careGiverId: {
            type: DataTypes.INTEGER,
            field: 'care_giver_id'
        },
        dogTypeId: {
            type: DataTypes.INTEGER,
            field: 'dog_type_id'
        },
        adoptionStatus: {
            type: DataTypes.INTEGER,
            field: 'adoption_status'
        }
    }, {
        underscored: true,
        underscoredAll: true,
        version: true
    });

    Dog.associate = models => {
        Dog.belongsTo(models.User, {
            foreignKey: 'care_giver_id'
        });
        Dog.belongsTo(models.DogType, {
            foreignKey: 'dog_type_id'
        });
        Dog.belongsTo(models.AdoptionStatus, {
            foreignKey: 'adoption_status'
        });
    }

    return Dog;
};