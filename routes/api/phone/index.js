const router = require('express').Router();
const PhoneService = require('../../../services/phoneService');
const boom = require('express-boom');
const Sequelize = require('../../../models/');

router.get('/', (req, res) => {
    PhoneService.findAll()
        .then((result) => {
            res.status(200).json(result);
        });
});

router.get('/:phone_id', (req, res) => {
    PhoneService.findById(req.params.phone_id)
        .then((result) => {
            if (!result) {
                res.boom.notFound();
            } else {
                res.status(200).json(result);
            }
        });
});

router.post('/', (req, res) => {
    PhoneService.create(req.body)
        .then(() => {
            res.status(201).json({});
        }).catch((err) => {
            if (err.name === "SequelizeValidationError") {
                res.boom.badRequest("Validation Error", err);
            }
        });
});

router.put('/:phone_id', (req, res) => {
    PhoneService.update(req.params.phone_id, req.body)
        .then(() => {
            res.status(200).json({});
        }).catch((err) => {
            if (err.name === "SequelizeValidationError") {
                res.boom.badRequest("Validation Error", err);
            }
        });
});

router.delete('/:phone_id', (req, res) => {
    PhoneService.delete(req.params.phone_id)
        .then((count) => {
            if (!count) {
                res.boom.notFound();
            }
            res.status(200).json({});
        }).catch((err) => {
            res.boom.badRequest();
        });
});

module.exports = router;