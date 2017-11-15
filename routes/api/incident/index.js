const router = require("express").Router();
const IncidentService = require("../../../services/incidentService");
const boom = require("express-boom");
const Sequelize = require("../../../models/");

router.get("/", (req, res) => {
  IncidentService.findAll().then(result => {
    res.status(200).json(result);
  });
});

router.get("/:incident_id", (req, res) => {
  IncidentService.findById(req.params.incident_id).then(result => {
    if (!result) {
      res.boom.notFound();
    } else {
      res.status(200).json(result);
    }
  });
});

router.post("/", (req, res) => {
  IncidentService.create(req.body)
    .then(() => {
      res.status(201).json({});
    })
    .catch(err => {
      if (err.name === "SequelizeValidationError") {
        res.boom.badRequest("Validation Error", err);
      }
    });
});

router.put("/:incident_id", (req, res) => {
  IncidentService.update(req.params.incident_id, req.body)
    .then(() => {
      res.status(200).json({});
    })
    .catch(err => {
      if (err.name === "SequelizeValidationError") {
        res.boom.badRequest("Validation Error", err);
      }
    });
});

router.delete("/:incident_id", (req, res) => {
  IncidentService.delete(req.params.incident_id)
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
