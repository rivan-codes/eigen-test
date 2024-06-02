const { Op }        = require('sequelize');
const controller    = require('./controller');
const { Sequelize } = require('../models');
const books         = require('../models').books
const members       = require('../models').members

exports.bookList = async(req, res) => {
    var search = ("%" + req.query.search + "%")
    var query = {}

    console.log(req.query.search);
    if (req.query.search) {
        query = {
            [Op.or] : {
                title: {
                    [Op.iLike] : search
                },
                code: {
                    [Op.iLike] : search
                }
            }
        };
    }

    const models = await books.findAll({
        where: query
    });
    
    const data = [];
    models.forEach(model => {
        let item = {}
        
        item.id     = model.id;
        item.code   = model.code;
        item.title  = model.title;
        item.author = model.author;

        data.push(item);
    });

    controller.trueResponse(res, 'List Books', data);
};

exports.memberList = async(req, res) => {
    var search = ("%" + req.query.search + "%")
    var query = {}

    console.log(req.query.search);
    if (req.query.search) {
        query = {
            [Op.or] : {
                name: {
                    [Op.iLike] : search
                },
                code: {
                    [Op.iLike] : search
                }
            }
        };
    }

    const models = await members.findAll({
        where: query
    });
    
    const data = [];
    models.forEach(model => {
        let item = {}
        
        item.id   = model.id;
        item.code = model.code;
        item.name = model.name;

        data.push(item);
    });

    controller.trueResponse(res, 'List Members', data);
};