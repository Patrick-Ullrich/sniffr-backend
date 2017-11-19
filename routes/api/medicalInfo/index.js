const router = require("express").Router();
const MedicalService = require("../../../services/medicalInfoService");
const boom = require("express-boom");
const Sequelize = require("../../../models/");

router.get("/", (req, res) => {
  MedicalService.findAll().then(result => {
    res.status(200).json(result);
  });
});

router.get("/:medical_id", (req, res) => {
  MedicalService.findById(req.params.medical_id).then(result => {
    if (!result) {
      res.boom.notFound();
    } else {
      res.status(200).json(result);
    }
  });
});

router.post("/", (req, res) => {
  MedicalService.create(req.body)
    .then(() => {
      res.status(201).json({});
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

router.put("/:medical_id", (req, res) => {
  MedicalService.update(req.params.medical_id, req.body)
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

router.delete("/:medical_id", (req, res) => {
  MedicalService.delete(req.params.medical_id)
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
