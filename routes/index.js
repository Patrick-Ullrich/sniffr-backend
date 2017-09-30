const routes = require('express').Router();

const dogRoutes = require('./api/dog/');
const firebaseRoutes = require('./api/firebase/');

routes.use('/api/dogs', dogRoutes);
routes.use('/api/firebase', firebaseRoutes);


module.exports = routes;