var express = require('express');
var router = express.Router();
/**
 * @openapi
 * /api:
 *   get:
 *     description: Welcome to Eigen API Test!
 *     responses:
 *       200:
 *         description: Returns a json.
*/

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;