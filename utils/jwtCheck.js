const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

module.exports = jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://patrickullrich.auth0.com/.well-known/jwks.json"
    }),
    audience: 'rezqs-api',
    issuer: "https://patrickullrich.auth0.com/",
    algorithms: ['RS256']
});