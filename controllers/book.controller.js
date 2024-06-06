const { Op }        = require('sequelize');
const controller    = require('./controller');
const { Sequelize } = require('../models');
const books         = require('../models').books

exports.list = async(req, res) => {
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
        where : query,
        where: {
            stock: { [Op.gte]: 1 },
          },
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