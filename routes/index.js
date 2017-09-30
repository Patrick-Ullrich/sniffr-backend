const routes = require('express').Router();

const addressRoutes = require('./api/address');
const adoptionStatusRoutes = require('./api/adoptionStatus');
const dogRoutes = require('./api/dog/');
const dogTypeRoutes = require('./api/dogType');
const firebaseRoutes = require('./api/firebase');
const houseRoutes = require('./api/house');
const houseTypeRoutes = require('./api/houseType');
const incidentRoutes = require('./api/incident');
const incidentStatusRoutes = require('./api/incidentStatus');
const incidentTypeRoutes = require('./api/incidentType');
const medicalInfoRoutes = require('./api/medicalInfo');
const medicalInfoTypeRoutes = require('./api/medicalInfoType');
const phoneRoutes = require('./api/phone');
const severityTypeRoutes = require('./api/severityType');
const userRoutes = require('./api/user');
const userTypeRoutes = require('./api/userType');


routes.use('/api/addresses', addressRoutes);
routes.use('/api/adoption_statuses', adoptionStatusRoutes);
routes.use('/api/dogs', dogRoutes);
routes.use('/api/dog_types', dogTypeRoutes);
routes.use('/api/firebase', firebaseRoutes);
routes.use('/api/houses', houseRoutes);
routes.use('/api/house_types', houseTypeRoutes);
routes.use('/api/incidents', incidentRoutes);
routes.use('/api/incident_statuses', incidentStatusRoutes);
routes.use('/api/incident_types', incidentTypeRoutes);
routes.use('/api/medical_infos', medicalInfoRoutes);
routes.use('/api/medical_info_types', medicalInfoTypeRoutes);
routes.use('/api/phones', phoneRoutes);
routes.use('/api/severity_types', severityTypeRoutes);
routes.use('/api/users', userRoutes);
routes.use('/api/user_types', userTypeRoutes);

module.exports = routes;