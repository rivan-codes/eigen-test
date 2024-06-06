const { Op }        = require('sequelize');
const controller    = require('./controller');
const { Sequelize } = require('../models');
const books         = require('../models').books

exports.create = async(req, res) => {
    const request = req.body;

    request.member_id

    controller.trueResponse(res, 'Borrow Books', data);
};