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

/**
 * @swagger
 * /api/borrwing_book/create:
 *   post:
 *     summary: Create borrowing books.
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     member_id:
 *                       type: integer
 *                       description: The member id (/api/data/member_list).
 *                       example: 0
 *                     book_ids:
 *                       type: json
 *                       description: The book ids (/api/data/book_id).
 *                       example: {1,2}
 *                     start_date:
 *                       type: date
 *                       description: The start date borrowing.
 *                       example: Y-m-d
 *                     end_date:
 *                       type: date
 *                       description: The start date end_date.
 *                       example: Y-m-d
*/

router.post('/borrwing_book/create', dataController.memberList);

module.exports = router;