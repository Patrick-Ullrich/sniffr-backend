const router = require("express").Router();
const UserService = require("../../../services/userService");
const boom = require("express-boom");
const Sequelize = require("../../../models/");

router.get("/", (req, res) => {
  UserService.findAll(req.query).then(result => {
    res.status(200).json(result);
  });
});

router.get("/:user_id", (req, res) => {
  UserService.findById(req.params.user_id).then(result => {
    if (!result) {
      res.boom.notFound();
    } else {
      res.status(200).json(result);
    }
  });
});

router.post("/", (req, res) => {
  UserService.create(req.body)
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

router.put("/:user_id", (req, res) => {
  UserService.update(req.params.user_id, req.body)
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

router.delete("/:user_id", (req, res) => {
  UserService.delete(req.params.user_id)
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
