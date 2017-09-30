const router = require('express').Router();
const UserTypeService = require('../../../services/userTypeService');
const boom = require('express-boom');
const Sequelize = require('../../../models/');

router.get('/', (req, res) => {
    UserTypeService.findAll()
        .then((result) => {
            res.status(200).json(result);
        });
});

module.exports = router;