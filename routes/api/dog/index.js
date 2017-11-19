const router = require("express").Router();
const DogService = require("../../../services/dogService");
const boom = require("express-boom");
const Sequelize = require("../../../models/");

router.get("/", (req, res) => {
  DogService.findAll().then(result => {
    res.status(200).json(result);
  });
});

router.get("/:dog_id", (req, res) => {
  DogService.findById(req.params.dog_id).then(result => {
    if (!result) {
      res.boom.notFound();
    } else {
      res.status(200).json(result);
    }
  });
});

router.post("/", (req, res) => {
  DogService.create(req.body)
    .then(() => {
      res.status(201).json({});
    })
    .catch(err => {
      if (err.name === "SequelizeValidationError") {
        res.boom.badRequest("Validation Error", err);
      }
    });
});

router.put("/:dog_id", (req, res) => {
  DogService.update(req.params.dog_id, req.body)
    .then(() => {
      res.status(200).json({});
    })
    .catch(err => {
      if (err.name === "SequelizeValidationError") {
        res.boom.badRequest("Validation Error", err);
      } else {
        res.boom.badImplementation(err);
      }
    });
});

router.delete("/:dog_id", (req, res) => {
  DogService.delete(req.params.dog_id)
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
