const router = require("express").Router();
const HouseService = require("../../../services/houseService");
const boom = require("express-boom");
const Sequelize = require("../../../models/");

router.get("/", (req, res) => {
  HouseService.findAll().then(result => {
    res.status(200).json(result);
  });
});

router.get("/:house_id", (req, res) => {
  HouseService.findById(req.params.house_id).then(result => {
    if (!result) {
      res.boom.notFound();
    } else {
      res.status(200).json(result);
    }
  });
});

router.post("/", (req, res) => {
  HouseService.create(req.body)
    .then(house => {
      res.status(201).json(house);
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

router.put("/:house_id", (req, res) => {
  HouseService.update(req.params.house_id, req.body)
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

router.delete("/:house_id", (req, res) => {
  HouseService.delete(req.params.house_id)
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
