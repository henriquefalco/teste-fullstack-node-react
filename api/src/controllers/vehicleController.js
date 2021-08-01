const db = require('../models/index')
const Vehicle = db.vehicle;
const Op = db.Sequelize.Op;

const cars = require('../../dumyData')

//Create and save new Vehicle
exports.create = (req, res) => {
    console.log(req.body)
    if (!req.body.veiculo) {
        res.status(400).send({
            message: "Vehicle can not be null!"
        });
        return;
    }

    //Create object vehicle
    const vehicle = {
        veiculo: req.body.veiculo,
        ano: req.body.ano,
        descricao: req.body.descricao,
        vendido: req.body.vendido,
        marca: req.body.marca,
    }

    //Save vehicle in the database 
    Vehicle.create(vehicle)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Something went wrong, check the request parameters!'
            })
        })
};

// Find all vehicle
exports.findAll = (req, res) => {
    const veiculo = req.query.vehicle;
    var condition = veiculo ? { veiculo: { [Op.like]: `${veiculo}` } } : null;

    Vehicle.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Something went wrong, check the request parameters!'
            });
        });
};

exports.createDumyData = (req, res) => {

    Vehicle.bulkCreate(cars)
        .then(data => {
            res.status(200).send({
                message: "Dumy Data Created"
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Something went wrong, check the request parameters!'
            });
        });
}