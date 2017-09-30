const router = require('express').Router();
const IncidentStatusService = require('../../../services/incidentStatusService');
const boom = require('express-boom');
const Sequelize = require('../../../models/');

router.get('/', (req, res) => {
    IncidentStatusService.findAll()
        .then((result) => {
            res.status(200).json(result);
        });
});

module.exports = router;