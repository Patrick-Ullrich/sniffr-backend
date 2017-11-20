const router = require("express").Router();
const AddressService = require("../../../services/addressService");
const boom = require("express-boom");
const Sequelize = require("../../../models/");

router.get("/", (req, res) => {
  AddressService.findAll().then(result => {
    res.status(200).json(result);
  });
});

router.get("/:address_id", (req, res) => {
  AddressService.findById(req.params.address_id).then(result => {
    if (!result) {
      res.boom.notFound();
    } else {
      res.status(200).json(result);
    }
  });
});

router.post("/", (req, res) => {
  AddressService.create(req.body)
    .then(address => {
      res.status(201).json(address);
    })
    .catch(err => {
      if (err.name === "SequelizeValidationError") {
        res.boom.badRequest("Validation Error", err);
      } else {
        console.log(err);
        res.boom.badImplementation(err);
      }
    });
});

router.put("/:address_id", (req, res) => {
  AddressService.update(req.params.address_id, req.body)
    .then(() => {
      res.status(200).json({});
    })
    .catch(err => {
      if (err.name === "SequelizeValidationError") {
        res.boom.badRequest("Validation Error", err);
      } else {
        console.log(err);
        res.boom.badImplementation(err);
      }
    });
});

router.delete("/:address_id", (req, res) => {
  AddressService.delete(req.params.address_id)
    .then(count => {
      if (!count) {
        res.boom.notFound();
      }
      res.status(200).json({});
    })
    .catch(err => {
      res.boom.badRequest();
    });
});

module.exports = router;
