const router = require('express').Router();
const MedicalInfoTypeService = require('../../../services/medicalInfoTypeService');
const boom = require('express-boom');
const Sequelize = require('../../../models/');

router.get('/', (req, res) => {
    MedicalInfoTypeService.findAll()
        .then((result) => {
            res.status(200).json(result);
        });
});

module.exports = router;