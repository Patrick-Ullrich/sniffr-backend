const router = require('express').Router();
const DogTypeService = require('../../../services/dogTypeService');
const boom = require('express-boom');
const Sequelize = require('../../../models/');

router.get('/', (req, res) => {
    DogTypeService.findAll()
        .then((result) => {
            res.status(200).json(result);
        });
});

module.exports = router;