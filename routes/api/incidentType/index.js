const router = require('express').Router();
const IncidentTypeService = require('../../../services/incidentTypeService');
const boom = require('express-boom');
const Sequelize = require('../../../models/');

router.get('/', (req, res) => {
    IncidentTypeService.findAll()
        .then((result) => {
            res.status(200).json(result);
        });
});

module.exports = router;