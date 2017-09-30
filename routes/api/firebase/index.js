const router = require('express').Router();
const firebase = require('firebase');
const boom = require('express-boom');
const jwtCheck = require('../../../utils/jwtCheck');

router.get('/delegate', (req, res, next) => {
    firebase.admin.auth().createCustomToken(req.auth.credentials.user_id)
        .then(function (customToken) {
            return reply(customToken)
        })
        .catch(function (error) {
            console.log('Error creating custom token:', error)
        })
});
module.exports = router;