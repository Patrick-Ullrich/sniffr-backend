const router = require('express').Router();
const HouseTypeService = require('../../../services/houseTypeService');
const boom = require('express-boom');
const Sequelize = require('../../../models/');

router.get('/', (req, res) => {
    HouseTypeService.findAll()
        .then((result) => {
            res.status(200).json(result);
        });
});

module.exports = router;