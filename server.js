const Sequelize = require("sequelize");
const express = require('express');
const fs = require('fs');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const models = require('./models/');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('./routes');
const boom = require('express-boom');
const tunnel = require('tunnel-ssh');
const app = express();
const port = process.env.PORT || 3000;

// const config = {
//   username: 'root',
//   host: '138.197.164.167',
//   port: 22,
//   dstHost: '127.0.0.1',
//   dstPort: 3306,
//   localHost: '127.0.0.1',
//   localPort: 3306,
//   privateKey: fs.readFileSync("/Users/patrickullrich/.ssh/id_rsa"),
//   passphrase: 'hungryhungryhippo'
// };

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use('/', express.static(__dirname + '/dist'));

//  Connect all our routes to our application
app.use(boom());
app.use('/', routes);
app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname + 'dist/index.html'));
});

//tunnel(config, function (error, server) {
models.sequelize.sync().then(() => {
  initSeed();
  app.listen(port);
});
// });

function initSeed() {
  if (process.env.SEED) {
    models.AdoptionStatus.bulkCreate([{
        adoptionStatusId: 1,
        description: 'Pending'
      },
      {
        adoptionStatusId: 2,
        description: 'Quarantine'
      },
      {
        adoptionStatusId: 3,
        description: 'Ready for Adoption'
      },
      {
        adoptionStatusId: 4,
        description: 'Adopted'
      }
    ]);

    models.DogType.bulkCreate([{
        dogTypeId: 1,
        description: 'German Shepherd'
      },
      {
        dogTypeId: 2,
        description: 'Rottweiler'
      },
      {
        dogTypeId: 3,
        description: 'Bulldog'
      }
    ]);

    models.HouseType.bulkCreate([{
        houseTypeId: 1,
        description: 'Townhouse'
      },
      {
        houseTypeId: 2,
        description: 'Bungalow'
      },
      {
        houseTypeId: 3,
        description: 'Farm'
      }
    ]);

    models.IncidentStatus.bulkCreate([{
        incidentStatusId: 1,
        description: 'Open'
      },
      {
        incidentStatusId: 2,
        description: 'Closed'
      }
    ]);

    models.IncidentType.bulkCreate([{
        incidentTypeId: 1,
        description: 'Medical Issue'
      },
      {
        incidentTypeId: 2,
        description: 'Out of Supplies'
      },
      {
        incidentTypeId: 3,
        description: 'General Question'
      }
    ]);

    models.MedicalInfoType.bulkCreate([{
        medicalInfoTypeId: 1,
        description: 'Vaccination'
      },
      {
        medicalInfoTypeId: 2,
        description: 'Neutering'
      },
      {
        medicalInfoTypeId: 3,
        description: 'Training'
      }
    ]);

    models.SeverityType.bulkCreate([{
        severityTypeId: 1,
        description: '1 - Emergency'
      },
      {
        severityTypeId: 2,
        description: '2 - High'
      },
      {
        severityTypeId: 3,
        description: '3 - Medium'
      },
      {
        severityTypeId: 4,
        description: '4 - Low'
      }
    ]);

    models.UserType.bulkCreate([{
        userTypeId: 1,
        description: 'Foster'
      },
      {
        userTypeId: 2,
        description: 'Event Coordinator'
      },
      {
        userTypeId: 3,
        description: 'Medical Coordinator'
      },
      {
        userTypeId: 4,
        description: 'Employee'
      }
    ]);

  }
}

module.exports = app;