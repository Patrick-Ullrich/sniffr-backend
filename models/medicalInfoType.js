'use strict';
module.exports = function (sequelize, DataTypes) {
    var MedicalInfoType = sequelize.define('MedicalInfoType', {
        medicalInfoTypeId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            field: 'medical_info_type_id'
        },
        description: {
            type: DataTypes.TEXT,
            field: 'description'
        }
    }, {
        underscored: true,
        underscoredAll: true,
        version: true
    });

    return MedicalInfoType;
};