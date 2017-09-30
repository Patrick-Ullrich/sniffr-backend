const router = require('express').Router();
const SeverityTypeService = require('../../../services/severityTypeService');
const boom = require('express-boom');
const Sequelize = require('../../../models/');

router.get('/', (req, res) => {
    SeverityTypeService.findAll()
        .then((result) => {
            res.status(200).json(result);
        });
});

module.exports = router;