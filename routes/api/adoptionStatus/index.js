const router = require('express').Router();
const AdoptionStatusService = require('../../../services/adoptionStatusService');
const boom = require('express-boom');
const Sequelize = require('../../../models/');

router.get('/', (req, res) => {
    AdoptionStatusService.findAll()
        .then((result) => {
            res.status(200).json(result);
        });
});

module.exports = router;