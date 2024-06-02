var express = require('express');
var router = express.Router();

const dataController = require('../controllers/data.controller');

/**
 * @openapi
 * /api/data/book_list:
 *  get:
 *     tags:
 *     - Data (Dropdown)
 *     summary: Get a list books
 *     parameters:
 *      - name: search
 *        in: query
 *        description: The search of the books (code or title)
 *        required: false
 *     responses:
 *      200:
 *        description: Fetched Successfully
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */

router.get('/data/book_list', dataController.bookList);

/**
 * @openapi
 * /api/data/member_list:
 *  get:
 *     tags:
 *     - Data (Dropdown)
 *     summary: Get a list members
 *     parameters:
 *      - name: search
 *        in: query
 *        description: The search of the members (code or name)
 *        required: false
 *     responses:
 *      200:
 *        description: Fetched Successfully
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */

router.get('/data/member_list', dataController.memberList);

module.exports = router;